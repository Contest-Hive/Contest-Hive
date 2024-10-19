import { getResponse, JsonResponse } from "@/app/api/default";
import { updateData as updateStatsData } from "@/db/updateStats";
import { waitUntil } from "@vercel/functions";

export async function GET() {
  waitUntil(updateStatsData("api")); // this won't block the response
  const data = await getResponse("leetcode");

  return await JsonResponse(data);
}
