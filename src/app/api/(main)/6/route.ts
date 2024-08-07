import { getResponse, JsonResponse } from "@/app/api/default";
import { updateData as updateStatsData } from "@/lib/dbConnect";

export async function GET() {
  await updateStatsData("api");
  const data = await getResponse("leetcode");

  return await JsonResponse(data);
}
