import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    ok: true,
    message:
      "Contest Hive API gives you contests information from 7 different platforms. Documentation at: https://contests.pages.dev/docs",
  };

  return new NextResponse(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
