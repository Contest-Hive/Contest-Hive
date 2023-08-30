"use client";

const allPlatforms = {
  AtCoder: "atcoder",
  CodeChef: "codechef",
  CodeForces: "codeforces",
  HackerEarth: "hackerearth",
  HackerRank: "hackerrank",
  LeetCode: "leetcode",
  Toph: "toph",
};

const Kontests = () => {
  const changePlatform = (plt) => {
    console.log("Platform changed to", plt);
  };

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
          className="mb-6 border text-gray-200 text-sm rounded-lg block w-2/3 mx-auto p-2.5 bg-gray-900 border-gray-700 placeholder-gray-700  focus:border-cyan-900 "
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
      <div className="container block md:w-2/3 mx-auto w-full">
        <button
          type="button"
          class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b rounded-t-lg border-gray-700 bg-gray-800 hover:bg-cyan-900"
        >
          <svg
            class="w-3 h-3 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          Profile
        </button>
        <button
          type="button"
          class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-700 bg-gray-800 hover:bg-cyan-900"
        >
          <svg
            class="w-5 h-5 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 21"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"
            />
          </svg>
          Settings
        </button>
        <button
          type="button"
          class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-700 bg-gray-800 hover:bg-cyan-900"
        >
          <svg
            class="w-4 h-4 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
            <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
          </svg>
          Messages
        </button>
        <button
          type="button"
          class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg  border-gray-700 bg-gray-800 hover:bg-cyan-900"
        >
          <svg
            class="w-3 h-3 mr-2.5"
            aria-hidden="true"
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
          Download
        </button>
      </div>
    </div>
  );
};

export default Kontests;
