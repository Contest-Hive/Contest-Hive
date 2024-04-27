import { NextResponse } from "next/server";

import {
  getEndTime,
  pascalNames,
  contestUrlData,
  getSecondsDifferencesFromNow,
} from "@/lib/helpers";

import type { CompressedContestType } from "@/lib/types";

const PLATFORM_NAME = "codeforces";

const API_URL = `https://raw.githubusercontent.com/Contest-Hive/__contest-hive-backend/cache/cache/Data/${PLATFORM_NAME}.json`;

function getContestData(
  contest: CompressedContestType,
  platformName: string | undefined,
) {
  if (!platformName) platformName = PLATFORM_NAME;
  const [contestName, contestUrl, startTime, durationSeconds] = contest;
  const duration = durationSeconds;
  const endTime = getEndTime(startTime, durationSeconds);
  return {
    title: contestName,
    url:
      contestUrlData[platformName as keyof typeof contestUrlData] + contestUrl,
    startTime,
    endTime,
    duration,
    platform: pascalNames[platformName as keyof typeof pascalNames],
  };
}

export async function GET() {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 3 * 60, // 3 Minutes
    },
  });

  const data = await response.json();
  const allContests = data.data;
  const contests = [];
  // @ts-ignore
  if (PLATFORM_NAME !== "all") {
    for (const contest of allContests) {
      // Skip if contest has already ended
      if (getSecondsDifferencesFromNow(contest.start) < 0) continue;
      const contestData = getContestData(contest, undefined);
      contests.push({ ...contestData });
    }
    data.data = contests;
  } else {
    for (const [key, value] of Object.entries(allContests)) {
      const contests = [];
      for (const contest of value as any[]) {
        if (getSecondsDifferencesFromNow(contest.startTime) < 0) continue;
        const contestData = getContestData(contest, key);
        contests.push({
          ...contestData,
          platform: pascalNames[key as keyof typeof pascalNames],
        });
      }
      data.data[key] = contests;
    }
  }

  return new NextResponse(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
