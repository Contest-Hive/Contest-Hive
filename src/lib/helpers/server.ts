"use server";
import { updateData as updateStatsData } from "@/db/updateStats";
import { getResponse as getContestResponse } from "@/app/api/default";
import { getSecondsDifferencesFromCurrentTime } from "@/lib/helpers/datetime";

import { sleep } from "../utils";
import { ContestDataType } from "@/lib/types";

export async function getStatsData(update: "api" | "page") {
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
  const response = await fetch(
    "https://contest-hive.vercel.app/api/others/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    },
  );

  return response.json();
}

/**
 * Retrieves and processes contest data.
 *
 * Fetches all contest data using `getContestResponse`, flattens the data structure into a single array, sorts contests based on their start times relative to the current time, and filters out contests that are starting in 10 seconds or less.
 *
 * @returns An array of contest objects that start in more than 10 seconds.
 */
export async function getAllContestData() {
  var _contests: ContestDataType = (await getContestResponse("all")).data;

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

/**
 * Retrieves the last updated time from the contest data JSON.
 *
 * This asynchronous function sends a GET request to a GitHub-hosted JSON file containing contest metadata
 * and extracts the `lastUpdated` property from the response.
 *
 * @returns A promise that resolves to the last updated time as a string.
 */
export async function getLastUpdatedTime() {
  const url =
    "https://raw.githubusercontent.com/Contest-Hive/__contest-hive-backend/refs/heads/cache/cache/Data/all.json";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const lastUpdated = data.lastUpdated as string;
  return lastUpdated;
}
