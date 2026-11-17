import { JsonResponse } from "@/app/api/default";

export async function GET() {
  const data = {
    ok: false,
    message: "Endpoint Not Found",
  };

  return await JsonResponse(data);
}
