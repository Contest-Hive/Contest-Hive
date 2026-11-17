import { getResponse, JsonResponse } from "@/app/api/default";

export async function GET() {
  const data = await getResponse("codeforces-gym");

  return await JsonResponse(data);
}
