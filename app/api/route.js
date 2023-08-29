const data = {
  ok: true,
  message:
    "Contest Hive API gives you contests infromations from 7 different platforms. Documentation at: https://contests.pages.dev/docs",
};

export async function GET() {
  return new Response(JSON.stringify(data, null, 4));
}
