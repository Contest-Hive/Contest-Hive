import { getEndTime } from "../helpers/KontestsHelper";

export const properties = [
  {
    name: "ok",
    type: "bool",
    description: "Whether the request was successful - true or false",
  },

  {
    name: "data",
    type: "array",
    description: "Data returned from the API (list of contests)",
  },

  {
    name: "title",
    type: "string",
    description: "Title of the contest",
  },

  {
    name: "url",
    type: "string",
    description: "Url of the contest",
  },

  {
    name: "startTime",
    type: "string",
    description: "Start time of the contest in UTC ISO 8601 format",
  },

  {
    name: "endTime",
    type: "string",
    description: "End time of the contest in UTC ISO 8601 format",
  },

  {
    name: "duration",
    type: "int",
    description: "Duration of the contest in seconds",
  },
  {
    name: "lastUpdated",
    type: "string",
    description: "Last time the data was updated",
  },
];
export const pascalNames = {
  all: "All",
  atcoder: "Atcoder",
  codechef: "CodeChef",
  codeforces: "Codeforces",
  "codeforces-gym": "CF GYM",
  codeforces_gym: "CF GYM",
  hackerearth: "HackerEarth",
  hackerrank: "HackerRank",
  leetcode: "LeetCode",
  toph: "Toph",
};
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

  const keys = Object.keys(platformUrls);
  const data = {
    ok: true,
    data: {},
    lastUpdated: currentDate,
  };
  for (const key of keys) {
    if (key.length % 2 === 1)
      data.data[key] = [generateExampleResponse(key, 1)];
    else data.data[key] = [];
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
