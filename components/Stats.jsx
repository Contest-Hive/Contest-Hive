// "use client";
// import { useEffect, useState } from "react";

/**
 * Takes a number as input and returns a simplified version of the number with a suffix indicating the magnitude.
 * @param {number} number - The number to be simplified.
 * @returns {string} - The simplified version of the input number with a suffix indicating the magnitude.
 */
function simplifyNumber(number) {
  if (number < 1000) {
    return number.toString();
  } else if (number < 1000000) {
    const simplified = (number / 1000).toFixed(1);
    return simplified.replace(".0", "") + "K";
  } else if (number < 1000000000) {
    const simplified = (number / 1000000).toFixed(1);
    return simplified.replace(".0", "") + "M";
  } else {
    const simplified = (number / 1000000000).toFixed(1);
    return simplified.replace(".0", "") + "B";
  }
}

const Stats = () => {
  let stats = [];
  const url = "https://contest-hive.vercel.app/api/all";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      stats = data;
      console.log(stats);
    })
    .catch((err) => console.log(err));

  console.log(stats);
  let { api, page, total, past24 } = stats;
  api = simplifyNumber(api);
  page = simplifyNumber(page);
  total = simplifyNumber(total);
  past24 = simplifyNumber(past24);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <dl className="mx-auto grid max-w-screen-md gap-8 text-gray-900 dark:text-white sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
              {past24}+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              visits in the past 24 hours
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">{api}+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              requests to the API
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
              {total}+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Total Visits
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Stats;
