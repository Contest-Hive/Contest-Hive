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
  const [contests, setContests] = useState({ data: [{name:"Loading Data...", url:"#"}] });

  const changePlatform = (plt) => {
    setPltName(plt);
  };

  useEffect(() => {
    setContests({ data: [{name:"Loading Data...", url:"#"}] });
    const url = `/api/${pltName.toLocaleLowerCase()}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setContests(json);
      })
      .catch((err) => {
        console.log("error:", err);
        alert("Something went wrong! Please refresh the page.");
      });
  }, [pltName]);

  const handlePlatformChange = (event) => {
    const plt = event.target.value;
    changePlatform(plt);
  };

  return (
    <div className="container px-5 py-10 mx-auto flex flex-wrap">
      <div className="flex flex-col text-center w-full mb-2">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-200"
        >
          Select a Platform
        </label>
        <select
          id="countries"
          className="mb-1 border text-gray-200 text-sm rounded-lg block w-2/3 mx-auto p-2.5 bg-gray-900 border-gray-700 placeholder-gray-700  focus:border-cyan-900 "
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
      <div className="mx-auto md:w-2/3 w-full mb-6">
        <button
          type="button"
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg rounded-t-lg border-gray-700 bg-sky-900 text-gray-100"
        >
          <span className="mr-4"></span>
          {svgIcons[pltName.toLowerCase()] || svgIcons["Default"]}
          Last Updated: {contests?.lastUpdated || " Loading..."}
        </button>
      </div>

      <div className="container block md:w-2/3 mx-auto w-full overflow-y-scroll h-60">
        {contests.data?.map((item) => {
          return (
            <Link href={item.url} target="_blank" key={item.url}>
              <button
                type="button"
                className={getClassOfButtons(
                  contests.data.indexOf(item),
                  contests.data.length
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
