// Browser-only Supabase access for the counters.
//
// Talks straight to PostgREST with the public (anon/publishable) key, so no
// database work ever happens inside a Vercel function. The key is public by
// design: the database side only exposes `bump_stats`, which adds exactly 1 to
// one of the two counters and returns the fresh row.

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export type StatsRow = {
  api: number;
  page: number;
  total: number;
  past24: number;
  past24api: number;
  past24page: number;
};

export const isStatsConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

/**
 * Increments one of the counters by exactly one and returns the new totals.
 * Returns `null` when the public Supabase env vars are not configured.
 */
export async function bumpStats(
  kind: "api" | "page" = "page",
): Promise<StatsRow | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn(
      "Stats are disabled: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
    return null;
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/bump_stats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ p_kind: kind }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `bump_stats failed (${response.status}): ${await response.text()}`,
    );
  }

  const data = await response.json();
  const row = Array.isArray(data) ? data[0] : data;

  return (row as StatsRow) ?? null;
}
