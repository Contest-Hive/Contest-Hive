import { getResponse, JsonResponse } from "@/app/api/default";

export async function GET() {
  const data = await getResponse("$platformName");

  return await JsonResponse(data);
}
