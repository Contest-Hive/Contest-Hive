import { pascalNames } from "../helpers/KontestsHelper";
import { getEndTime } from "../helpers/KontestsHelper";

export function GetExampleResponse(platformName) {
  const currentDate = new Date().toISOString().slice(0, -5) + "Z";
  if (platformName !== "all") {
    return {
      ok: true,
      data: [
        generateExampleResponse(platformName, 1),
        generateExampleResponse(platformName, 2),
      ],
      lastUpdated: currentDate,
    };
  }

  const keys = platformUrls.keys();
  const data = {
    ok: true,
    data: {},
    lastUpdated: currentDate,
  };
  for (const key of keys) {
    data.data[key] = [
      generateExampleResponse(key, 1),
      generateExampleResponse(key, 2),
    ];
  }
  return data;
}

const platformUrls = {
  atcoder: "https://atcoder.jp/contests/",
  codechef: "https://www.codechef.com/contests/",
  codeforces: "https://codeforces.com/contests/",
  "codeforces-gym": "https://codeforces.com/gym/",
  hackerearth: "https://www.hackerearth.com/challenges/",
  hackerrank: "https://www.hackerrank.com/contests/",
  leetcode: "https://leetcode.com/contest/",
  toph: "https://toph.co/c/",
};

export function generateExampleResponse(platformName, num) {
  const currentDate = new Date().toISOString().slice(0, -5) + "Z";
  const data = {
    title: `Example Contest of ${pascalNames[platformName]} ${num}`,
    url: `${platformUrls[platformName]}example-contest`,
    startTime: currentDate,
    endTime: getEndTime(currentDate, 3600 * num),
    duration: 3600 * num,
    platform: pascalNames[platformName],
  };
  return data;
}
