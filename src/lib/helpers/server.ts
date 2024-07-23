"use server";
import { randomInt } from "@/lib/utils";
import getFakeContestData from "@/lib/helpers/fakeContestData";
import { updateData as updateStatsData } from "@/lib/dbConnect";
import { getResponse as getContestResponse } from "@/app/api/(main)/default";
import { getSecondsDifferencesFromCurrentTime } from "@/lib/helpers/datetime";

import { ContestDataType } from "@/lib/types";

const OFFLINE = process.env.OFFLINE;

function _getRandomStats() {
  return [
    {
      title: "Today",
      value: randomInt(100),
      description: "visited",
    },
    {
      title: "Total served",
      value: randomInt(1000000),
      description: "API requests",
    },
    {
      title: "Total",
      value: randomInt(5000000),
      description: "page visits",
    },
  ];
}

export async function getStatsData(update: "api" | "page") {
  if (OFFLINE) {
    return _getRandomStats();
  }

  // also increments whenever called
  const data = await updateStatsData(update);
  return [
    {
      title: "Today",
      value: data.past24page,
      description: "visited",
    },
    {
      title: "Total served",
      value: data.api,
      description: "API requests",
    },
    {
      title: "Total",
      value: data.page,
      description: "page visits",
    },
  ];
}

export async function sendMessage(message: string) {
  if (OFFLINE)
    return {
      ok: true,
      message: "Sent Message to Nowhere!",
      description: "You are offline right now. You know that?",
    };

  const response = await fetch("/api/others/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  return response.json();
}

export async function getAllContestData() {
  // Fetch contests data
  if (OFFLINE) {
    var _contests: ContestDataType = getFakeContestData();
  } else {
    var _contests: ContestDataType = (await getContestResponse("all")).data;
  }

  // Process contests data
  const contestData = Object.values(_contests).flatMap((contests) => contests);
  contestData.sort(
    (a, b) =>
      getSecondsDifferencesFromCurrentTime(a.startTime) -
      getSecondsDifferencesFromCurrentTime(b.startTime),
  );

  // Filter contests that have already started
  const filteredContests = contestData.filter(
    (contest) => getSecondsDifferencesFromCurrentTime(contest.startTime) > 10,
  );

  return filteredContests;
}
