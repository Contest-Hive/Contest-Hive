import { NextResponse } from "next/server";
export async function GET() {
  const data = {
    ok: true,
    message: "Hello from the API",
  };
  return new NextResponse(JSON.stringify(data, null, 2));
}
