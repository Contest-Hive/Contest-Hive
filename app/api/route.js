export async function GET() {
  const data = {
    ok: true,
    message:
      "Contest Hive API gives you contests information from 7 different platforms. Documentation at: https://contests.pages.dev/docs",
  };

  return new Response(JSON.stringify(data, null, 4));
}
