import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

export async function middleware(req) {
  const { nextUrl } = req;
  const origin = String(nextUrl.origin);
  const href = String(nextUrl.href);
  const path = href.toLowerCase().includes("api") ? "api" : "page";

  // if (href.includes("_next")) return NextResponse.next(); // don't track next.js files

  async function makeReq() {
    await fetch(`${origin}/api/others/stats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path }),
    });
  }

  makeReq();
  return NextResponse.next();
}
