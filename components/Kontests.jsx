"use client";
import { useEffect, useState } from "react";
import AOS from "@/others/applyAOS.js";
import { getTable } from "@/components/helpers/KontestsHelper";

const Kontests = () => {
  const [showAll, setShowAll] = useState(false);
  const [sortBy, setSortBy] = useState("startTime");
  const [isDesktop, setDesktop] = useState(false);
  const [totalContests, setTotalContests] = useState(0);
  const [pltName, setPltName] = useState("all");
  const [allContestsData, setAllContestsData] = useState({
    data: {},
    justLoaded: true,
  });

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }, [showAll, sortBy, pltName]);

  useEffect(() => {
    setDesktop(window.innerWidth > 768);
  }, []);

  useEffect(() => {
    fetchContestData();
  }, []);

  useEffect(() => {
    calculateTotalContests();
  }, [pltName, allContestsData]);

  const fetchContestData = () => {
    fetch("/api/all")
      .then((res) => res.json())
      .then((json) => {
        setAllContestsData(json);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  const calculateTotalContests = () => {
    let count = 0;
    const plt = pltName.toLowerCase();
    if (plt === "all") {
      for (let key in allContestsData.data) {
        count += allContestsData.data[key].length;
      }
    } else {
      count = allContestsData.data[plt].length;
    }
    setTotalContests(count);
  };

  return (
    <>
      {/* Options to Select the Platform */}
      <div
        className="container mx-auto flex flex-wrap px-5 py-10"
        id="contests"
      >
        <div className="mb-0 flex w-full flex-col text-center">
          <label
            htmlFor="platforms"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Select a Platform
          </label>
          <select
            id="platforms"
            className="mx-auto mb-1 block w-2/3 rounded-lg border-gray-900 bg-gray-900 p-2.5 text-sm text-gray-200 placeholder-gray-800  outline-none focus:ring-2 focus:ring-gray-900 "
            onChange={(event) => setPltName(event.target.value)}
          >
            <option defaultValue="all">All</option>
            <option value="atcoder">AtCoder</option>
            <option value="codechef">CodeChef</option>
            <option value="codeforces">CodeForces</option>
            <option value="codeforces_gym">CodeForces GYM</option>
            <option value="hackerearth">HackerEarth</option>
            <option value="hackerrank">HackerRank</option>
            <option value="leetcode">LeetCode</option>
            <option value="toph">Toph</option>
          </select>
        </div>
      </div>

      <div className="-mt-5 mb-7 text-center text-lg font-medium text-gray-200 md:text-xl">
        {totalContests} Future Contests
      </div>

      <div className="mx-auto mb-5 w-11/12 md:w-3/4">
        <div>
          <span className="mr-5 pl-1 text-lg font-medium">Sort By:</span>
          <div
            className={`${
              sortBy == "startTime" ? "bg-blue-700" : "bg-slate-800"
            } inline-block cursor-pointer select-none rounded-bl-md rounded-tl-md px-4 py-2 text-center font-medium text-gray-200 transition-all duration-300`}
            onClick={() => setSortBy("startTime")}
          >
            Start Time
          </div>
          <div
            className={`${
              sortBy == "platform" ? "bg-blue-700" : "bg-slate-800"
            } inline-block cursor-pointer select-none rounded-br-md rounded-tr-md px-4 py-2 text-center font-medium text-gray-200`}
            onClick={() => setSortBy("platform")}
          >
            Platform
          </div>
        </div>
      </div>

      {/* Table of Contests */}
      <div className="relative mx-auto w-11/12 overflow-x-auto rounded md:w-3/4">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-gray-800 text-xs uppercase text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Platform
              </th>
              <th scope="col" className="py-3 pl-6 pr-10">
                Contest<span className="mr-1"></span>name
              </th>
              <th scope="col" className="py-3 pl-6 pr-8">
                Starting<span className="mr-1"></span>In
              </th>
              <th scope="col" className="py-3 pl-6 pr-20">
                Duration
              </th>
              <th scope="col" className="pl-5 pr-7 py-3">
                Link
              </th>
              <th scope="col" className="pl-1 py-3">
                Reminder
              </th>
            </tr>
          </thead>
          <tbody>
            {getTable(allContestsData, pltName, isDesktop, sortBy).slice(
              0,
              showAll ? 9999 : 7,
            )}
          </tbody>
        </table>
      </div>
      <div
        className="container mx-auto mt-5 w-32 cursor-pointer select-none rounded-md bg-gray-800 px-4 py-2 text-center font-medium text-gray-200 transition-all duration-300 hover:bg-gray-900"
        onClick={() => {
          if (showAll && totalContests > 7) window.location.href = "#contests";
          setShowAll(!showAll);
        }}
      >
        {showAll ? "Show Less" : "Show More"}
      </div>
    </>
  );
};

export default Kontests;
