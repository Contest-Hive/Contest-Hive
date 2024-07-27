import ContestData from "@/../public/all.json";
import type { CompressedContestType } from "@/lib/types";
import { pascalNames, contestUrlData } from "@/lib/constants";
import { getEndTime, getRandomISOTime } from "@/lib/helpers/datetime";

function getContestData(contest: CompressedContestType, platformName: string) {
  const [contestName, contestUrl, __startTime, durationSeconds] = contest;
  const startTime = getRandomISOTime();
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

export default function getFakeContestData() {
  const data: any = {};
  const allContests = ContestData.data;

  for (const [key, value] of Object.entries(allContests)) {
    const contests = [];
    for (const contest of value as any[]) {
      const contestData = getContestData(contest, key);
      contests.push({
        ...contestData,
        platform: pascalNames[key as keyof typeof pascalNames],
      });
    }
    data[key] = contests;
  }

  return data;
}
