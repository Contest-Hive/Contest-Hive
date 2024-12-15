import { JsonResponse } from "@/app/api/default";
import { updateData as updateStatsData } from "@/db/updateStats";
import { waitUntil } from "@vercel/functions";

export async function GET() {
  waitUntil(updateStatsData("api"));
  const data = {
    ok: true,
    data: [
      "atcoder",
      "codechef",
      "codeforces",
      "hackerearth",
      "hackerrank",
      "leetcode",
      "toph",
    ],
    alias: {
      "1": "atcoder",
      "2": "codechef",
      "3": "codeforces",
      "4": "hackerearth",
      "5": "hackerrank",
      "6": "leetcode",
      "7": "toph",
    },
  };

  return await JsonResponse(data);
}
