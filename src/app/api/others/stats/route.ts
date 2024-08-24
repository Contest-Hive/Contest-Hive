import STATS from "@/db/schemas/STATS";
import { updateData } from "@/db/updateStats";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const jsonData = await req.json();

    const { path } = jsonData;

    await updateData(path);

    return new NextResponse(JSON.stringify({ ok: true }, null, 2));
  } catch {
    return new NextResponse(JSON.stringify({ ok: false }, null, 2));
  }
}

export async function GET(req: NextRequest) {
  try {
    const stats = await STATS.findOne({ _id: 1 });
    const data = {
      ok: true,
      ...stats._doc,
      href: req.nextUrl.href,
      ip: req.headers.get("x-real-ip") || "127.0.0.1",
    };
    delete data._id;

    return new NextResponse(JSON.stringify(data, null, 2), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "*",
      },
    });
  } catch {
    return new NextResponse(JSON.stringify({ ok: false }, null, 2));
  }
}
