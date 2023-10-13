"use client";
import { useEffect, useState } from "react";
import AOS from "@/others/applyAOS.js";
import {
  sortContests,
  paginateContests,
  GenerateContestTable,
  generatePageNumbers,
} from "@/components/helpers/KontestsHelper";

const Kontests = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [contestsPerPage, setContestsPerPage] = useState(7);
  const [allContests, setAllContests] = useState([]);
  const [totalContests, setTotalContests] = useState(0);
  const [pltName, setPltName] = useState("all");
  const [sortBy, setSortBy] = useState("startTime");
  const [isDesktop, setDesktop] = useState(false);
  const [contestsJson, setContestsJson] = useState({
    justLoaded: true,
  });

  useEffect(() => {
    const contests = sortContests(contestsJson, pltName, sortBy);
    setAllContests(contests);
    setTotalContests(contests.length);
    setCurrentPage(1);
    setTotalPages(Math.ceil(contests.length / contestsPerPage));

    // refresh AOS
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }, [sortBy, pltName]);

  useEffect(() => {
    const fetchContestData = () => {
      fetch("/api/all")
        .then((res) => res.json())
        .then((json) => {
          setContestsJson(json); // set the contests json
          const contests = sortContests(json, pltName, sortBy); // sort the contests according to the platform and sortBy
          setAllContests(contests); // set the contests

          setTotalContests(contests.length);
          setTotalPages(Math.ceil(contests.length / contestsPerPage));
          setDesktop(window.innerWidth > 768);
        })
        .catch((err) => {
          setDesktop(window.innerWidth > 768);

          console.log("error:", err);
        });
    };
    fetchContestData();
  }, []);

  function navigation() {
    const list = generatePageNumbers(currentPage, totalPages);
    return list.map((page) => {
      if (currentPage === page) {
        return (
          <button
            className="mr-2 rounded-md bg-blue-600 px-3 py-1 hover:bg-blue-700"
            onClick={() => setCurrentPage(page)}
            key={page}
            title={`Current Page: ${page}`}
          >
            {page}
          </button>
        );
      } else {
        return (
          <button
            className="mr-2 rounded-md bg-gray-600 px-3 py-1 hover:bg-slate-700"
            onClick={() => setCurrentPage(page)}
            key={page}
            title={`Go to Page: ${page}`}
          >
            {page}
          </button>
        );
      }
    });
  }

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
              <th scope="col" className="py-3 pl-5 pr-7">
                Link
              </th>
              <th scope="col" className="py-3 pl-1">
                Reminder
              </th>
            </tr>
          </thead>

          <tbody>
            {GenerateContestTable(
              paginateContests(allContests, currentPage, contestsPerPage),
              pltName,
              isDesktop,
              contestsJson.justLoaded ?? false,
            )}
          </tbody>
        </table>
      </div>

      <section className="mx-auto mt-5 flex w-11/12 justify-between rounded-lg bg-gray-900 px-5 pb-3 pt-3 text-lg font-semibold text-gray-200 md:w-3/4">
        <p className="pt-1">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex">
          <button
            className="mr-2 rounded-md bg-gray-700 px-1 py-2 hover:bg-slate-800"
            onClick={() => {
              if (totalPages === 1) return;
              if (currentPage === 1) return setCurrentPage(totalPages);
              setCurrentPage((prev) => prev - 1);
            }}
            title="Previous Page"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </button>
          {navigation()}
          <button
            className="rounded-md bg-gray-700 px-1 py-2 hover:bg-slate-800"
            onClick={() => {
              if (totalPages === 1) return;
              if (currentPage === totalPages) return setCurrentPage(1);
              setCurrentPage((prev) => prev + 1);
            }}
            title="Next Page"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default Kontests;
