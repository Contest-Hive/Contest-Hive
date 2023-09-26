import { NextResponse } from "next/server";
import requestIp from "request-ip";

export async function GET(req) {
  const detectedIp = requestIp.getClientIp(req);
  const data = {
    ok: true,
    ip: detectedIp,
    userAgent: req.headers.get("user-agent"),
  };
  return new NextResponse(JSON.stringify(data, null, 2));
}
