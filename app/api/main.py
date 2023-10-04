import os

data = {
    "data": {
        "all": "all",
        "1": "atcoder",
        "2": "codechef",
        "3": "codeforces",
        "4": "hackerearth",
        "5": "hackerrank",
        "6": "leetcode",
        "7": "toph",
        "8": "codeforces_gym",
    },
}


def getText(name):
    firstPart = """
import { NextResponse } from "next/server";

import {
  getSecondsDifference,
  getEndTime,
  pascalNames
} from "@/components/helpers/KontestsHelper";

const API_URL =
  "https://raw.githubusercontent.com/Contest-Hive/__contest-hive-backend/cache/cache/Data/😀.json";

const urlData = {
  atcoder: "https://atcoder.jp/contests/",
  codechef: "https://www.codechef.com/",
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
function getContestData(contest, platformName) {
  😥
  const [contestName, contestUrl, startTime, durationSeconds] = contest;
  const duration = durationSeconds;
  const endTime = getEndTime(startTime, durationSeconds);
  return {
    title: contestName,
    url: urlData[platformName] + contestUrl,
    startTime,
    endTime,
    duration,
    platform: pascalNames[platformName],
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
""".strip().replace("😀", name).replace("😥", f"platformName = \"{name}\""if name != "all" else "")

    if name == "all":
        middlePart = """
  for (const [key, value] of Object.entries(allContests)) {
    const contests = [];
    for (const contest of value) {
      if (getSecondsDifference(contest.startTime) < 0) continue;
      const contestData = getContestData(contest, key);
      contests.push({ ...contestData, platform: pascalNames[key] });
    }
    data.data[key] = contests;
  }
"""
    else:
        middlePart = """
  const contests = [];
  for (let i = 0; i < allContests.length; i++) {
    const contest = allContests[i];

    // Skip if contest has already ended
    if (getSecondsDifference(contest.start) < 0) continue;

    const contestData = getContestData(contest);
    contests.push({ ...contestData });
  }
  data.data = contests;
"""

    lastPart = """
  return new NextResponse(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
"""

    return firstPart + middlePart + lastPart


for i, platform in data["data"].items():
    for x in [i, platform]:
        x = x.replace("_", "-")
        if not os.path.exists(x):
            os.mkdir(x)

        with open(f"{x}/route.js", 'w', encoding="utf8") as f:
            f.write(getText(platform))
