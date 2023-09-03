"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ----------- Time Related Functions ----------- //
function convertToLocalDate(utcDate) {
  /*    Types
  utcDate   : String - The date in UTC ISO 8601 format
  */

  const x = new Date(utcDate);
  return x;
}

function getSecondsDifference(date) {
  /*    Types
  date2   : String - The second date in UTC ISO 8601 format
  */

  // Parse the ISO 8601 formatted dates into Date objects
  const startDate = new Date();
  const endDate = new Date(date);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = endDate - startDate;

  // Convert milliseconds to seconds
  const differenceInSeconds = differenceInMilliseconds / 1000;

  return differenceInSeconds;
}

function humanReadableTime(startTime) {
  /*   Types
  startTime   : String - The start time of the contest in UTC ISO 8601 format
  */

  const dt = new Date(startTime);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dt.getDate();
  const month = months[dt.getMonth()];
  const year = dt.getFullYear();
  let hours = dt.getHours();
  let minutes = dt.getMinutes();
  let seconds = dt.getSeconds();
  if (hours.toString().length === 1) hours = `0${hours}`;
  if (minutes.toString().length === 1) minutes = `0${minutes}`;
  if (seconds.toString().length === 1) seconds = `0${seconds}`;

  let daySuffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  }

  const timeString = `${day}${daySuffix} ${month}, ${year} at ${hours}:${minutes}:${seconds}`;

  return timeString;
}

function whenIsItStarting(s) {
  if (!s) return "never";

  let m = Math.floor(s / 60);
  s %= 60;
  let h = Math.floor(m / 60);
  m %= 60;
  let d = Math.floor(h / 24);
  h %= 24;

  let result = "";

  if (d > 0) {
    result += `${d} day${d > 1 ? "s" : ""}`;
  }
  if (h > 0) {
    result += `${result ? " " : ""}${h} hour${h > 1 ? "s" : ""}`;
  }
  if (m > 0) {
    result += `${result ? " " : ""}${m} minute${m > 1 ? "s" : ""}`;
  }
  if (!result) {
    result = `${s} second${s > 1 ? "s" : ""}`;
  }
  result = result.split(" ");
  const x = result[0];
  const y = result[1];

  return `${x} ${y}`;
}

// // Example usage:
// const startTime = "2023-09-14T09:00:00.000+00:00";
// const formattedTime = humanReadableTime(startTime);
// console.log(formattedTime);

// ----------- Table Related Functions ----------- //
function trimString(str, maxLen) {
  /*    Types
	str       : String - The string to trim
	maxLen    : Number - The maximum length of the string, including the ellipsis
  */
  if (str.length <= maxLen) return str;
  return `${str.substr(0, maxLen - 3)}...`;
}

function getTableRow(name, duration, url, startTimeUTC) {
  /*    Types
	name              : String - The name of the contest
  startingInUTC        : String - The time remaining for the contest to start
	duration          : String - The duration of the contest
	url               : String - The url of the contest
	startTimeUTC      : String - The start time of the contest in UTC ISO 8601 format
  */

  let maxLen = 50;
  if (typeof window !== "undefined") {
    // Client-side-only code
    maxLen = window.innerWidth < 768 ? 33 : 50;
  }
  console.log(startTimeUTC);
  const startTime = humanReadableTime(startTimeUTC);
  let startingIn = whenIsItStarting(getSecondsDifference(startTimeUTC));

  return (
    <tr className="border-b  border-gray-700 bg-gray-800" key={url}>
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium  text-white"
        title={name}
      >
        {trimString(name, maxLen)}
      </th>
      <td className="px-6 py-4" title={startTime}>
        {startingIn}
      </td>
      <td className="px-6 py-4" title={duration}>
        {duration}
      </td>
      <td className="px-6 py-4 font-medium text-blue-400" title={url}>
        <Link href={url} target="_blank">
          Here
        </Link>
      </td>
    </tr>
  );
}

const KontestsTable = () => {
  const [pltName, setPltName] = useState("atcoder");
  const [contestsData, setContestsData] = useState({
    ok: true,
    data: [
      {
        name: "Loading",
        url: "#",
        startTime: "",
        startingIn: "never",
        duration: "-1",
      },
    ],
  });

  function getContestsDataFromAPI(pltName) {
    /*    Types
			pltName   : String - The name of the platform
	*/
    const url = `/api/${pltName.toLocaleLowerCase()}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setContestsData(json);
      })
      .catch((err) => {
        console.log("error:", err);
        // alert("Something went wrong! Please refresh the page.");
      });
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContestsDataFromAPI(pltName);
    return () => {
      setContestsData({
        ok: true,
        data: [
          {
            name: "Loading",
            url: "#",
            startTime: "fetching...",
            startingIn: "never",
            duration: "-1",
          },
        ],
      });
    };
  }, [pltName]);

  const changePlatform = (event) => {
    const plt = event.target.value;
    setPltName(plt);
  };

  return (
    <>
      {/* Options to Select the Platform */}

      <div className="container mx-auto flex flex-wrap px-5 py-10">
        <div className="mb-2 flex w-full flex-col text-center">
          <label
            htmlFor="countries"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Select a Platform
          </label>
          <select
            className="mx-auto mb-1 block w-2/3 rounded-lg border border-gray-700 bg-gray-900 p-2.5 text-sm text-gray-200 placeholder-gray-700  focus:border-cyan-900 "
            onChange={changePlatform}
          >
            <option defaultValue="atcoder">AtCoder</option>
            <option value="codechef">CodeChef</option>
            <option value="codeforces">CodeForces</option>
            <option value="hackerearth">HackerEarth</option>
            <option value="hackerrank">HackerRank</option>
            <option value="leetcode">LeetCode</option>
            <option value="toph">Toph</option>
          </select>
        </div>
      </div>

      {/* Table of Contests */}
      <div className="relative mx-auto w-11/12 overflow-x-auto rounded md:w-3/4">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-gray-700 text-xs uppercase text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Contest name
              </th>
              <th scope="col" className="px-6 py-3">
                Starting In
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {contestsData.data.map((info) => {
              return getTableRow(
                info.name,
                info.duration,
                info.url,
                info.startTime,
              );
            })}
            {/* If the ContestsData is Empty */}
            {contestsData.data.length === 0 && (
              <tr className="border-b border-gray-700 bg-gray-800" key={1}>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-white"
                >
                  No Contests Available
                </th>
                <td className="px-6 py-4">never</td>
                <td className="px-6 py-4">-1</td>
                <td className="px-6 py-4">Nowhere!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default KontestsTable;
