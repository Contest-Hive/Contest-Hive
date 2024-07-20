"use server";

import { NextResponse } from "next/server";

import {
  getEndTime,
  getSecondsDifferencesFromCurrentTime,
} from "@/lib/helpers/datetime";
import { updateData } from "@/lib/dbConnect";
import { pascalNames, contestUrlData } from "@/lib/constants";


import type { CompressedContestType } from "@/lib/types";

function getContestData(
  contest: CompressedContestType,
  platformName: string | undefined,
) {
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

type platformName =
  | "all"
  | "atcoder"
  | "codechef"
  | "codeforces"
  | "codeforces-gym"
  | "hackerearth"
  | "hackerrank"
  | "leetcode"
  | "toph";

export async function getResponse(platformName: platformName) {
  const API_URL = `https://raw.githubusercontent.com/Contest-Hive/__contest-hive-backend/cache/cache/Data/${platformName}.json`;

  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  const data = await response.json();
  const allContests = data.data;
  const contests = [];

  if (platformName !== "all") {
    for (const contest of allContests) {
      // Skip if contest has already ended
      if (getSecondsDifferencesFromCurrentTime(contest.start) < 0) continue;
      const contestData = getContestData(contest, undefined);
      contests.push({ ...contestData });
    }
    data.data = contests;
  } else {
    for (const [key, value] of Object.entries(allContests)) {
      const contests = [];
      for (const contest of value as any[]) {
        if (getSecondsDifferencesFromCurrentTime(contest.startTime) < 0)
          continue;
        const contestData = getContestData(contest, key);
        contests.push({
          ...contestData,
          platform: pascalNames[key as keyof typeof pascalNames],
        });
      }
      data.data[key] = contests;
    }
  }
  return data;
}

export async function JsonResponse(data: any, status = 200) {
  await updateData("api"); // Update the stats

  return new NextResponse(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
