import { NextResponse } from "next/server";

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
      body: JSON.stringify({ path, href }),
    });
  }

  
  // setTimeout(makeReq, 0);
  makeReq();
  return NextResponse.next();
}
