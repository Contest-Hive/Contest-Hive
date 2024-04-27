import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    ok: false,
    message: "Endpoint Not Found",
  };
  return new NextResponse(JSON.stringify(data, null, 2), {
    status: 404,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
