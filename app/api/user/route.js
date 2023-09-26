import { NextResponse } from "next/server";
import requestIp from "request-ip";

export async function GET(req) {
  const detectedIp = requestIp.getClientIp(req);
  const forwarded = req.headers["x-forwarded-for"];

  const ip =
    typeof forwarded === "string"
      ? forwarded.split(/, /)[0]
      : req.socket.remoteAddress;

  const data = {
    ok: true,
    ip,
    userAgent: req.headers.get("user-agent"),
  };
  return new NextResponse(JSON.stringify(data, null, 2));
}
