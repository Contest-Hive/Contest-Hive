"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import svgIcons from "./helpers/KontestsHelper";

function trimString(str, maxLen) {
  /*    Types
	str: String - The string to trim
	maxLen: Number - The maximum length of the string, including the ellipsis
  */
  if (str.length <= maxLen) return str;
  return `${str.substr(0, maxLen - 3)}...`;
}

function getTableRow(name, startTime, duration, url) {
  /*    Types
	name: String - The name of the contest
	startTime: String - The start time of the contest
	duration: String - The duration of the contest
	url: String - The url of the contest
  */
  return (
    <tr className="border-b  border-gray-700 bg-gray-800" key={url}>
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium  text-white"
        title={name}
      >
        {trimString(name, 31)}
      </th>
      <td className="px-6 py-4" title={startTime}>
        {startTime}
      </td>
      <td className="px-6 py-4" title={duration}>
        {duration}
      </td>
      <td className="px-6 py-4 font-medium text-cyan-400" title={url}>
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
        startTime: "fetching...",
        duration: "-1",
      },
    ],
  });

  function getContestsDataFromAPI(pltName) {
    /*    Types
			pltName: String - The name of the platform
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
            duration: "-1",
          },
        ],
      });
    };
  }, [pltName]);

  const changePlatform = (event) => {
    const plt = event.target.value;
    setPltName(plt);
    // console.log(`Platform changed to`, plt);
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
      <div className="relative mx-auto w-96 md:w-3/4 overflow-x-auto rounded">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Contest name
              </th>
              <th scope="col" className="px-6 py-3">
                Start Time
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
                info.startTime,
                info.duration,
                info.url,
              );
            })}
            {/* If the ContestsData is Empty */}
            {contestsData.data.length === 0 && (
              <tr
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                key={1}
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
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
