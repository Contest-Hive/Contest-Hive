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
      <div className="flex flex-col text-center w-full mb-20">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a Platform
        </label>
        <select
          id="countries"
          className="border text-gray-200 text-sm rounded-lg block md:w-1/3 mx-auto p-2.5 bg-gray-800 border-gray-700 placeholder-gray-700  focus:ring-blue-500 focus:border-blue-500"
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
    </div>
  );
};

export default Kontests;
