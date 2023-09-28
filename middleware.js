import { NextResponse } from "next/server";

export async function middleware(req) {
  const { nextUrl } = req;
  const origin = String(nextUrl.origin) + "/";
  const href = String(nextUrl.href);
  const path = href.toLowerCase().includes("api") ? "api" : "page";

  if (href === origin) return NextResponse.next(); // Don't count the home page

  // Exclude some paths
  const excludedValues = ["_next", "favicon", "assets", "api/others"];
  for (const value of excludedValues) {
    if (href.toLowerCase().includes(value)) return NextResponse.next();
  }

  async function makeReq() {
    await fetch(`${origin}/api/others/stats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path }),
    });
  }
  // console.log("middleware done:", href);

  makeReq();
  return NextResponse.next();
}
