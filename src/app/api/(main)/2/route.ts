import { getResponse, JsonResponse } from "@/app/api/default";

export async function GET() {
  const data = await getResponse("codechef");

  return await JsonResponse(data);
}
