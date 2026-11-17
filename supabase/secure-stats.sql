-- ============================================================================
-- Contest Hive — lock down the public schema
--
-- HOW TO RUN: Supabase Dashboard -> SQL Editor -> New query -> paste this
-- whole file -> Run. (It is SQL, not a shell command.)
--
-- Before: anon + authenticated held SELECT/INSERT/UPDATE/DELETE/TRUNCATE on
--         stats, stats_test and daily_stats_history, with RLS disabled.
-- After:  no grants on any table in public, and exactly one callable function,
--         public.bump_stats(kind), which can only add +1 to the counters.
-- ============================================================================

-- 0. Audit: rowsecurity = false means the public key can read AND write it.
select tablename, rowsecurity
from pg_tables
where schemaname = 'public';

-- 1. Make sure the single counter row exists before anyone calls the RPC.
insert into public.stats (id) values (1)
on conflict (id) do nothing;

-- 2. Every existing table in `public`: RLS on, no public role grants.
do $$
declare
  t record;
begin
  for t in select tablename from pg_tables where schemaname = 'public'
  loop
    execute format('alter table public.%I enable row level security', t.tablename);
    execute format('revoke all on table public.%I from anon, authenticated', t.tablename);
  end loop;
end;
$$;

-- 3. Same for the sequences behind those tables.
do $$
declare
  s record;
begin
  for s in select sequencename from pg_sequences where schemaname = 'public'
  loop
    execute format('revoke all on sequence public.%I from anon, authenticated', s.sequencename);
  end loop;
end;
$$;

-- 4. The only write path: a SECURITY DEFINER function that can add exactly 1.
--    Runs as the function owner (the `postgres` role), so it still works with
--    the table locked down.
create or replace function public.bump_stats(p_kind text default 'page')
returns public.stats
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  result public.stats;
begin
  if p_kind not in ('api', 'page') then
    raise exception 'invalid stats kind: %', p_kind using errcode = '22023';
  end if;

  update public.stats
     set total      = total + 1,
         past24     = past24 + 1,
         api        = api + (case when p_kind = 'api'  then 1 else 0 end),
         past24api  = past24api + (case when p_kind = 'api'  then 1 else 0 end),
         page       = page + (case when p_kind = 'page' then 1 else 0 end),
         past24page = past24page + (case when p_kind = 'page' then 1 else 0 end)
   where id = 1
  returning * into result;

  if result is null then
    insert into public.stats (id, total, past24, api, past24api, page, past24page)
    values (
      1, 1, 1,
      case when p_kind = 'api'  then 1 else 0 end,
      case when p_kind = 'api'  then 1 else 0 end,
      case when p_kind = 'page' then 1 else 0 end,
      case when p_kind = 'page' then 1 else 0 end
    )
    returning * into result;
  end if;

  return result;
end;
$$;

-- Functions get EXECUTE for PUBLIC by default; remove that and hand it to anon
-- only, which is the role the browser's public key maps to.
revoke all on function public.bump_stats(text) from public;
revoke all on function public.bump_stats(text) from anon, authenticated;
grant execute on function public.bump_stats(text) to anon;

-- 5. Stop the "anon can do everything in public" default for future tables.
alter default privileges in schema public revoke all on tables    from anon, authenticated;
alter default privileges in schema public revoke all on sequences from anon, authenticated;

-- If a cron job writes daily_stats_history with the public/anon key it will now
-- fail; switch that job to the service_role key (which bypasses this) instead.

-- 6. Verify ----------------------------------------------------------------
-- Expect 0 rows: the public key has no grant on any table in public.
select table_name, grantee, privilege_type
from information_schema.role_table_grants
where table_schema = 'public'
  and grantee in ('anon', 'authenticated')
order by table_name, grantee;

-- Expect exactly one row: anon | EXECUTE (owner rows may also appear).
select grantee, privilege_type
from information_schema.role_routine_grants
where routine_schema = 'public'
  and routine_name = 'bump_stats';

-- 7. Make PostgREST pick up the new function right away (usually automatic).
notify pgrst, 'reload schema';
