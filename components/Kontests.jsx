"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import svgIcons from "./helpers/KontestsHelper";

const allPlatforms = {
  AtCoder: "atcoder",
  CodeChef: "codechef",
  CodeForces: "codeforces",
  HackerEarth: "hackerearth",
  HackerRank: "hackerrank",
  LeetCode: "leetcode",
  Toph: "toph",
};

function getClassOfButtons(index, length) {
  // ${index + 1 == length ? "rounded-b-lg " : ""

  return `${index == 0 ? "rounded-t-lg " : ""}
  }relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-700 bg-gray-800 hover:bg-cyan-900`;
}

// Component
const Kontests = () => {
  const [pltName, setPltName] = useState("atcoder");
  const [contests, setContests] = useState({
    data: [{ name: "Loading Data...", url: "#" }],
  });

  const changePlatform = (plt) => {
    setPltName(plt);
  };

  useEffect(() => {
    const url = `/api/${pltName.toLocaleLowerCase()}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setContests(json);
      })
      .catch((err) => {
        console.log("error:", err);
        // alert("Something went wrong! Please refresh the page.");
      });

    return () => {
      setContests({ data: [{ name: "Loading Data...", url: "#" }] });
    };
  }, [pltName]);

  const handlePlatformChange = (event) => {
    const plt = event.target.value;
    changePlatform(plt);
  };

  return (
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
          onChange={handlePlatformChange}
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

      {/* Last Updated */}
      <div className="mx-auto mb-6 w-full md:w-2/3">
        <button
          type="button"
          className="relative inline-flex w-full items-center rounded-b-lg rounded-t-lg border-gray-700 bg-sky-900 px-4 py-2 text-sm font-medium text-gray-100"
        >
          <span className="mr-4"></span>
          {svgIcons[pltName.toLowerCase()] || svgIcons["Default"]}
          Last Updated: {contests?.lastUpdated || " Loading..."}
        </button>
      </div>

      <div className="container mx-auto block h-60 w-full overflow-y-scroll md:w-2/3">
        {contests.data?.map((item) => {
          return (
            <Link href={item.url} target="_blank" key={item.url}>
              <button
                type="button"
                className={getClassOfButtons(
                  contests.data.indexOf(item),
                  contests.data.length,
                )}
              >
                <span
                  className={
                    contests.data.indexOf(item) + 1 > 9 ? "mr-1" : "mr-2"
                  }
                >
                  {contests.data.indexOf(item) + 1}
                </span>
                {svgIcons[pltName.toLowerCase()] || svgIcons["Default"]}
                {item.name}
              </button>
            </Link>
          );
        })}
        {contests.data.length == 0 && (
          <Link href="#" key="1">
            <button type="button" className={getClassOfButtons(2, 5)}>
              <span className="mr-2">1</span>
              {svgIcons["Default"]}
              No Contests is available at {pltName}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Kontests;
