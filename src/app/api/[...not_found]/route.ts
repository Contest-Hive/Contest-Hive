import { JsonResponse } from "@/app/api/default";
import { updateData as updateStatsData } from "@/db/updateStats";

export async function GET() {
  await updateStatsData("api");
  const data = {
    ok: false,
    message: "Endpoint Not Found",
  };

  return await JsonResponse(data);
}
