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
          className="block mb-2 text-sm font-medium text-gray-900 text-white"
        >
          Select a Platform
        </label>
        <select
          id="countries"
          className="mb-6 border text-gray-200 text-sm rounded-lg block w-2/3 mx-auto p-2.5 bg-purple-900 border-gray-700 placeholder-gray-700  focus:ring-blue-500 focus:border-blue-500"
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
      <div className="container px-5">
        <ul class="w-2/3text-sm font-medium  border rounded-lg bg-gray-800 border-gray-700 text-gray-200 mx-auto">
          <li class="w-full px-4 py-2 border-b rounded-t-lg border-gray-700 hover:bg-gray-900">
            Contest 1
          </li>
          <li class="w-full px-4 py-2 border-b border-gray-700 hover:bg-gray-900">
            Contest 2
          </li>
          <li class="w-full px-4 py-2 border-b border-gray-700 hover:bg-gray-900">
            Contest 3
          </li>
          <li class="w-full px-4 py-2 rounded-b-lg hover:bg-gray-900">
            Contest 4
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Kontests;
