import STATS from "@/db/schemas/STATS";
import { updateData } from "@/db/updateStats";
import { NextRequest } from "next/server";
import { JsonResponse } from "@/app/api/default";

export async function POST(req: NextRequest) {
  try {
    const jsonData = await req.json();

    const { path } = jsonData;

    await updateData(path);

    return JsonResponse({ ok: true });
  } catch {
    return JsonResponse({ ok: false }, 500);
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

    return JsonResponse(data);
  } catch {
    return JsonResponse({ ok: false }, 500);
  }
}
