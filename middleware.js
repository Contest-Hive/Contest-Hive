import { NextResponse } from "next/server";
import GenerateRssFeed from "@/components/GenerateRssFeed";

export async function middleware(req) {
  const { nextUrl } = req;
  const origin = String(nextUrl.origin) + "/";
  const href = String(nextUrl.href);

  // Exclude some paths

  const excludedValues = ["_next", "favicon", "assets", "icon", "image"];

  for (const value of excludedValues) {
    if (href.toLowerCase().includes(value)) return NextResponse.next();
  }
  
  const path = href.toLowerCase().includes("api") ? "api" : "page";

  async function makeReq() {
    await fetch(`${origin}/api/others/stats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path }), // send the path as it is shorter than the full URL
    });
  }

  await makeReq();
  console.log("middleware done:", href);
  return NextResponse.next();
}
