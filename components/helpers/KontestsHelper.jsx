import Link from "next/link";

// ----------- Time Related Functions ----------- //
/**
 *
 * @param {string} date - The date in UTC ISO 8601 format
 * @returns {number} - The difference in seconds between the current time and the given time
 */
function getSecondsDifference(date) {
  // Parse the ISO 8601 formatted dates into Date objects
  const startDate = new Date();
  const endDate = new Date(date);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = endDate - startDate;

  // Convert milliseconds to seconds
  const differenceInSeconds = differenceInMilliseconds / 1000;

  return differenceInSeconds;
}

/**
 *
 * @param {string} startTime - The start time of the contest in UTC ISO 8601 format
 * @returns {string} - The start time of the contest in human readable format eg. 14th September, 2021 at 9:00:00
 */
function humanReadableTime(startTime) {
  const dt = new Date(startTime);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dt.getDate();
  const month = months[dt.getMonth()];
  const year = dt.getFullYear();
  let hours = dt.getHours();
  let minutes = dt.getMinutes();
  let seconds = dt.getSeconds();
  if (hours.toString().length === 1) hours = `0${hours}`;
  if (minutes.toString().length === 1) minutes = `0${minutes}`;
  if (seconds.toString().length === 1) seconds = `0${seconds}`;

  let daySuffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  }

  const timeString = `${day}${daySuffix} ${month}, ${year} at ${hours}:${minutes}:${seconds}`;

  return timeString;
}

/**
 *
 * @param {number} s - The time in seconds
 * @returns {string} - The time in human readable format eg. 1 day or 5 days or 3 hours
 */
function whenIsItStarting(s) {
  if (!s) return "13 seconds";

  let m = Math.floor(s / 60);
  s %= 60;
  let h = Math.floor(m / 60);
  m %= 60;
  let d = Math.floor(h / 24);
  h %= 24;

  let result = "";

  if (d > 0) {
    result += `${d} day${d > 1 ? "s" : ""}`;
  }
  if (h > 0) {
    result += `${result ? " " : ""}${h} hour${h > 1 ? "s" : ""}`;
  }
  if (m > 0) {
    result += `${result ? " " : ""}${m} minute${m > 1 ? "s" : ""}`;
  }
  if (!result) {
    result = `${s} second${s > 1 ? "s" : ""}`;
  }
  result = result.split(" ");
  const x = result[0];
  const y = result[1];

  return `${x} ${y}`;
}

// ----------- Table Related Functions ----------- //

/**
 *
 * @param {string} str - The string to capitalize
 * @returns {string} - The capitalized string eg. "heLLo" -> "Hello"
 */
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 *
 * @param {string} str - The string to trim
 * @param {number} maxLen - The maximum length of the string, including the ellipsis
 * @returns {string} - The trimmed string eg. "Hello World" -> "Hello..."
 */
function trimString(str, maxLen) {
  if (str.length <= maxLen) return str;
  return `${str.slice(0, maxLen - 3)}...`;
}

/**
 *
 * @param {object} data - The data object containing the contests
 * @param {string} platform - Name of the platform
 * @returns {JSX.Element} - The table containing the contests
 */
function getTable(data, platform, isDesktop) {
  const maxLen = isDesktop ? 50 : 33;

  const contests = [];
  platform = platform.toLowerCase();

  if (platform === "all") {
    for (const [key, value] of Object.entries(data)) {
      for (const contest of value) {
        // if the contest is already over, skip it
        if (getSecondsDifference(contest.startTime) < 0) continue;
        contests.push({ ...contest, platform: key });
      }
    }
  } else {
    for (const contest of data[platform]) {
      // if the contest is already over, skip it
      if (getSecondsDifference(contest.startTime) < 0) continue;
      contests.push({ ...contest, platform });
    }
  }

  // sort the contests by starting time
  contests.sort((a, b) => {
    return (
      getSecondsDifference(a.startTime) - getSecondsDifference(b.startTime)
    );
  });

  if (contests.length === 0) {
    // If no contest is available
    return (
      <tr className="bg-gray-900" key={1}>
        <td className="px-6 py-4 font-medium">{capitalizeString(platform)}</td>
        <td className="px-6 py-4 font-medium">No Contests Available</td>
        <td className="px-6 py-4">never</td>
        <td className="px-6 py-4">-1</td>
        <td className="px-6 py-4">Nowhere!</td>
      </tr>
    );
  }

  const table = contests.map((contest) => {
    const contestName = contest.name;
    const duration = contest.duration;
    const url = contest.url;
    const startTime = humanReadableTime(contest.startTime);
    const startingIn = whenIsItStarting(
      getSecondsDifference(contest.startTime),
    );
    const plt = capitalizeString(contest.platform);

    return (
      <tr className="border-b border-gray-800 bg-gray-900" key={url}>
        <th scope="row" className="px-6 py-4 font-medium" title={plt}>
          {plt}
        </th>
        <th
          scope="row"
          className="whitespace-nowrap px-6 py-4 font-medium text-white"
          title={contestName}
        >
          {trimString(contestName, maxLen)}
        </th>
        <td className="px-6 py-4" title={startTime}>
          {startingIn}
        </td>
        <td className="px-6 py-4" title={duration}>
          {duration}
        </td>
        <td className="px-6 py-4 font-medium text-blue-500" title={url}>
          <Link href={url} target="_blank">
            Open
          </Link>
        </td>
      </tr>
    );
  });

  return table;
}

function placeholderContests(isDesktop) {
  const maxLen = isDesktop ? 50 : 33;
  const contests = [
    {
      name: "World's Best Contest Ever Organized by Meow and Doggo",
      startingIn: "33 seconds",
    },
    {
      name: "Meow vs Doggo Contest",
      startingIn: "33 seconds",
    },
    {
      name: "Elon Musk vs Mark Zuckerberg Coding Contest",
      startingIn: "1 hour",
    },
    {
      name: "Tourist vs Benq Live Coding Contest",
      startingIn: "2 hours",
    },
    {
      name: "Soumya1 vs YouKn0wWho",
      startingIn: "2 days",
    },
    {
      name: "Nusab19 vs Safin01 Live Coding Contest",
      startingIn: "now...",
    },
  ];

  const table = contests.map((contest) => {
    const contestName = contest.name;
    const url = "#";
    const startTime = humanReadableTime(contest.startTime);
    const startingIn = contest.startingIn;
    const plt = "Loading";

    return (
      <tr className="border-b border-gray-800 bg-gray-900" key={contests.indexOf(contest)}>
        <th scope="row" className="px-6 py-4 font-medium" title={plt}>
          {plt}
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 font-medium text-white"
          title={contestName}
        >
          {trimString(contestName, maxLen)}
        </th>
        <td className="px-6 py-4" title={startTime}>
          {startingIn}
        </td>
        <td className="px-6 py-4" title="0">
          0
        </td>
        <td className="px-6 py-4 font-medium text-blue-500" title={url}>
          Nowhere!
        </td>
      </tr>
    );
  });

  return table;
}

export { getTable, getSecondsDifference, placeholderContests };
