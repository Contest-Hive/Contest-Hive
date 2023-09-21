import os

data = {
    "message": [
        "atcoder",
        "codechef",
        "codeforces",
        "hackerearth",
        "hackerrank",
        "leetcode",
        "toph"
    ],
    "data": {
        # "all": "all",
        "1": "atcoder",
        "2": "codechef",
        "3": "codeforces",
        "4": "hackerearth",
        "5": "hackerrank",
        "6": "leetcode",
        "7": "toph"
    }
}


def getText(name):
    text = """
import { NextResponse } from "next/server";

import { getSecondsDifference } from "@/components/helpers/KontestsHelper";

const API_URL = "https://raw.githubusercontent.com/Nusab19/__contest-hive-backend/main/cache/Data/"""+name+""".json";


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

  return new NextResponse(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
""".strip()

    return text


for i, platform in data["data"].items():
    for x in [i, platform]:
        if not os.path.exists(x):
            os.mkdir(x)
        with open(f"{x}/route.js", 'w', encoding="utf8") as f:
            f.write(getText(platform))
