import { NextResponse } from "next/server";

import { getSecondsDifference } from "@/components/helpers/KontestsHelper";

const API_URL =
  "https://raw.githubusercontent.com/Nusab19/__contest-hive-backend/main/cache/Data/all.json";

export async function GET() {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 5 * 60, // 5 Minutes
    },
  });

  const data = await response.json();
  const allContests = Object(data.data);

  for (const [key, value] of Object.entries(allContests)) {
    const contests = [];
    for (const contest of value) {
      // if the contest is already over, skip it
      if (getSecondsDifference(contest.startTime) < 0) continue;
      contests.push({ ...contest, platform: key });
    }
    data.data[key] = contests;
  }

  return new NextResponse(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
