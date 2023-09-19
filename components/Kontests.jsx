"use client";

import { useEffect, useState } from "react";
import { getTable } from "../components/helpers/KontestsHelper.jsx";

const Kontests = () => {
  const [pltName, setPltName] = useState("all");
  const [allContestsData, setAllContestsData] = useState({
    ok: true,
    data: {
      atcoder: [
        {
          name: "Loading",
          url: "#",
          startTime: "",
          startingIn: "never",
          duration: "-1",
        },
      ],
      codechef: [],
      codeforces: [],
      hackerearth: [],
      hackerrank: [],
      leetcode: [],
      toph: [],
    },
  });

  useEffect(() => {
    // Gets api/all endpoint
    fetch("/api/all")
      .then((res) => res.json())
      .then((json) => {
        setAllContestsData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error:", err);
        // alert("Something went wrong! Please refresh the page.");
      });
  }, []);

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
            htmlFor="platforms"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Select a Platform
          </label>
          <select
            id="platforms"
            className="mx-auto mb-1 block w-2/3 rounded-lg border-gray-800 bg-gray-900 p-2.5 text-sm text-gray-200 placeholder-gray-800  outline-none focus:ring-2 focus:ring-gray-900"
            onChange={changePlatform}
          >
            <option defaultValue="all">All</option>
            <option value="atcoder">AtCoder</option>
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
          <thead className="bg-gray-800 text-xs uppercase text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Platform
              </th>
              <th scope="col" className="px-6 py-3">
                Contest name
              </th>
              <th scope="col" className="py-3 pl-6">
                Starting<span className="mr-1"></span>In
              </th>
              <th scope="col" className="py-3 pl-6 pr-32">
                Duration
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>{getTable(allContestsData.data, pltName)}</tbody>
        </table>
      </div>
    </>
  );
};

export default Kontests;
