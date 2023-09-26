import { NextResponse } from "next/server";
import requestIp from "request-ip";

export async function GET(req) {
  const ip = req.ip ?? "127.0.0.1";

  const data = {
    ok: true,
    ip,
    userAgent: req.headers.get("user-agent"),
  };
  return new NextResponse(JSON.stringify(data, null, 2));
}
