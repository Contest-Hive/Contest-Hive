import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { ip, nextUrl } = req;

  nextUrl.searchParams.set('clientIp', ip);

  return NextResponse.rewrite(nextUrl);
}

export async function GET(req) {
  const data = {
    ok: true,
    ip: req.query.clientIp ?? "127.0.0.1",
    message: "Hello from the API",
  };
  return new NextResponse(JSON.stringify(data, null, 2));
}
