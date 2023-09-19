// import { NextResponse } from "next/server";

import { getSecondsDifference } from "@/components/helpers/KontestsHelper";

const API_URL =
  "https://raw.githubusercontent.com/Nusab19/__contest-hive-backend/main/cache/Data/atcoder.json";

export async function GET() {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 5 * 60, // 5 Minutes
    },
  });

  const data = await response.json();
  const allContests = data.data;
  const contests = [];
  for (let i = 0; i < allContests.length; i++) {
    const contest = allContests[i];
    if (getSecondsDifference(contest.startTime) < 0) continue;
    contests.push({ ...contest });
  }
  data.data = contests;

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
