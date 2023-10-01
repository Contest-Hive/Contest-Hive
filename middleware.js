import { NextResponse } from "next/server";

export async function middleware(req) {
  const { nextUrl } = req;
  const origin = String(nextUrl.origin) + "/";
  const href = String(nextUrl.href);

  // Exclude some paths
  const excludedValues = ["_next", "favicon", "assets", "icon"];
  for (const value of excludedValues) {
    if (href.toLowerCase().includes(value)) return NextResponse.next();
  }
  
  async function makeReq() {
    await fetch(`${origin}/api/others/stats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ href }),
    });
  }

  await makeReq();
  console.log("middleware done:", href);
  return NextResponse.next();
}
