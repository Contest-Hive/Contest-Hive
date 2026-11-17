import { getResponse, JsonResponse } from "@/app/api/default";

export async function GET() {
  const data = await getResponse("atcoder");

  return await JsonResponse(data);
}
