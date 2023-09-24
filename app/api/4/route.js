import { NextResponse } from "next/server";

import {
  getSecondsDifference,
  humanReadableTimeUTC,
  seconds2Time,
} from "@/components/helpers/KontestsHelper";

const API_URL =
  "https://raw.githubusercontent.com/Nusab19/__contest-hive-backend/cache/cache/Data/hackerearth.json";

const urlData = {
  atcoder: "https://atcoder.jp/contests/",
  codechef: "https://www.codechef.com/contests/",
  codeforces: "https://codeforces.com/contests/",
  codeforces_gym: "https://codeforces.com/gymRegistration/",
  hackerearth: "https://",
  hackerrank: "https://www.hackerrank.com/contests/",
  leetcode: "https://leetcode.com/contest/",
  toph: "https://toph.co/c/",
};

/**
 * Formats contest data.
 * @param {Array} contest - contest data. [name, url, start, duration]
 * @returns {Object} - formatted contest data. {name, url, startTime, readableStateTime, duration, durationSeconds}
 */
function getContestData(contest) {
  const platformName = "hackerearth"
  const [contestName, contestUrl, startTime, durationSeconds] = contest;
  const readableStateTime = humanReadableTimeUTC(startTime);
  const duration = seconds2Time(durationSeconds);
  return {
    name: contestName,
    url: urlData[platformName] + contestUrl,
    startTime,
    readableStateTime,
    duration,
    durationSeconds,
  };
}

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

    // Skip if contest has already ended
    if (getSecondsDifference(contest.start) < 0) continue;

    const contestData = getContestData(contest);
    contests.push({ ...contestData });
  }
  data.data = contests;

  return new NextResponse(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
