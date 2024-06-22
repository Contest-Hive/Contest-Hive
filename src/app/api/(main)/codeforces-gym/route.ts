import { getResponse, JsonResponse } from "../default";
import { updateData as updateStatsData } from "@/lib/dbConnect";

export async function GET() {
  await updateStatsData("api");
  const data = await getResponse("codeforces-gym");

  return await JsonResponse(data);
}
