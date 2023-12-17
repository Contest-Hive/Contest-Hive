import { NextResponse } from "next/server";
import GenerateRssFeed from "@/components/GenerateRssFeed";

const docsUrl = "https://contest-hive.github.io/docs";

export async function middleware(req) {
  const { nextUrl } = req;
  const origin = String(nextUrl.origin) + "/";
  const href = String(nextUrl.href);

  if (req.nextUrl.pathname.startsWith("/docs")) {
    const path = req.nextUrl.pathname.slice(5);
    const targetUrl = docsUrl + path;
    return NextResponse.redirect(targetUrl);
  }

  // return rss feed
  if (href.toLowerCase().endsWith("/rss.xml")) {
    const xml = await GenerateRssFeed();
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml;charset=UTF-8",
      },
    });
  }

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
