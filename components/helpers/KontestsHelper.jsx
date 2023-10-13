import Link from "next/link";

/**
 * Calculates the difference in seconds between the current time and a given date in UTC ISO 8601 format.
 *
 * @param {string} date - The date in UTC ISO 8601 format.
 * @returns {number} - The difference in seconds between the current time and the given date.
 */
export function getSecondsDifference(date) {
  const startDate = new Date();
  const endDate = new Date(date);

  const differenceInSeconds = (endDate - startDate) / 1000;

  return differenceInSeconds;
}

/**
 * Converts a start time in UTC ISO 8601 format into a human-readable format.
 * @param {string} startTime - The start time of the contest in UTC ISO 8601 format (e.g., "2021-09-14T09:00:00Z").
 * @returns {string} - The start time of the contest in human-readable format (e.g., "14th September, 2021 at 9:00:00").
 */
export function readableTime(startTime) {
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
  const hours = dt.getHours().toString().padStart(2, "0");
  const minutes = dt.getMinutes().toString().padStart(2, "0");
  const seconds = dt.getSeconds().toString().padStart(2, "0");

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
 * Converts time in seconds to a short human-readable format.
 * @param {number} s - The time in seconds.
 * @returns {string} - The formatted time.
 */
export function shortenStartTime(s) {
  if (!s) return "13 seconds";

  const seconds = s % 60;
  const minutes = Math.floor((s / 60) % 60);
  const hours = Math.floor((s / 3600) % 24);
  const days = Math.floor(s / 86400);

  let result = "";

  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""}`;
  }
  if (hours > 0) {
    result += `${result ? " " : ""}${hours} hour${hours > 1 ? "s" : ""}`;
  }
  if (minutes > 0) {
    result += `${result ? " " : ""}${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
  if (!result) {
    result = `${seconds} second${seconds > 1 ? "s" : ""}`;
  }

  const [x, y] = result.split(" ");
  return `${x} ${y}`;
}

/**
 * Converts a number of seconds into a human-readable time format.
 * @param {number} s - The time in seconds.
 * @returns {string} - The time in a human-readable format.
 */
export function seconds2Time(s) {
  if (!s) {
    return "13 seconds";
  }

  const seconds = s % 60;
  const minutes = Math.floor(s / 60) % 60;
  const hours = Math.floor(s / 3600) % 24;
  const days = Math.floor(s / 86400);

  let result = "";

  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""}`;
  }
  if (hours > 0) {
    result += `${result ? " " : ""}${hours} hour${hours > 1 ? "s" : ""}`;
  }
  if (minutes > 0) {
    result += `${result ? " " : ""}${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
  if (!result) {
    result = `${seconds} second${seconds > 1 ? "s" : ""}`;
  }

  return result;
}

/**
 * Trims a string if it exceeds the maximum length, adding an ellipsis at the end.
 * @param {string} str - The string to trim.
 * @param {number} maxLen - The maximum length of the trimmed string, including the ellipsis.
 * @returns {string} - The trimmed string.
 */
export function trimString(str, maxLen) {
  if (str.length <= maxLen) {
    return str;
  }
  return str.slice(0, maxLen - 3) + "...";
}

export const pascalNames = {
  all: "All",
  atcoder: "Atcoder",
  codechef: "CodeChef",
  codeforces: "Codeforces",
  "codeforces-gym": "CF GYM",
  codeforces_gym: "CF GYM",
  hackerearth: "HackerEarth",
  hackerrank: "HackerRank",
  leetcode: "LeetCode",
  toph: "Toph",
};

export function GenerateContestTable(
  contests,
  platformName,
  isDesktop,
  justLoaded,
) {
  const maxLen = isDesktop ? 50 : 33;
  if (justLoaded) return placeholderContests(isDesktop); // if still fetching, show placeholder contests

  if (contests.length === 0) {
    return [
      <tr className="bg-gray-900" key={1}>
        <td className="px-6 py-4 font-medium">{pascalNames[platformName]}</td>
        <td className="px-6 py-4 font-medium">No Contests Available</td>
        <td className="px-6 py-4">never</td>
        <td className="px-6 py-4">30 minutes</td>
        <td className="px-6 py-4">{externalLink("#", "Atcoder")}</td>
        <td className="px-6 py-4">
          {generateGoogleCalendarLink(
            "2027-09-14T09:00:00Z",
            0,
            "No Contests Available",
            "",
            platformName,
          )}
        </td>
      </tr>,
    ];
  }
  return contests.map((contest) => {
    const { title, duration, url, startTime, platform } = contest;
    const readableDuration = seconds2Time(duration);

    const contestName = trimString(title, maxLen);
    const startingIn = shortenStartTime(getSecondsDifference(startTime));
    const plt = pascalNames[platform]; // platform title in pascal case

    return (
      <tr className="border-b border-gray-800 bg-gray-900" key={url}>
        <th
          scope="row"
          className="select-none px-6 py-4 font-medium md:select-text"
          title={plt}
        >
          {plt}
        </th>
        <th
          scope="row"
          className="select-none whitespace-nowrap px-6 py-4 font-medium text-gray-100 md:select-text"
        >
          <span className="toolText">{contestName}</span>
          <span className="tooltip absolute mx-auto -mt-1 ml-5 hidden select-none rounded-lg bg-slate-800 px-2 pb-[7px] pt-[5px] text-center text-sm font-medium text-gray-200 opacity-0 transition-opacity duration-200">
            <svg
              className="absolute -ml-[19px] mt-[3px] h-4 w-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
            >
              <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
            </svg>
            {title}
          </span>
        </th>
        <td className="select-none px-6 py-4 md:select-text">
          <span className="toolText">{startingIn}</span>
          <span className="tooltip absolute mx-auto -mt-1 ml-5 hidden w-56 select-none rounded-lg bg-slate-800 px-0 pb-[7px] pt-[5px] text-center text-sm font-medium text-gray-200 opacity-0 transition-opacity duration-200">
            <svg
              className="absolute -ml-[10px] mt-[3px] h-4 w-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
            >
              <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
            </svg>
            {readableTime(startTime)}
          </span>
        </td>
        <td
          className="select-none px-6 py-4 md:select-text"
          title={readableDuration}
        >
          {readableDuration}
        </td>
        <td className="px-6 py-4 font-medium text-blue-500" title={url}>
          {externalLink(url, plt)}
        </td>

        <td className="px-6 py-4">
          {generateGoogleCalendarLink(startTime, duration, title, url, plt)}
        </td>
      </tr>
    );
  });
}

/**
 * Returns a table containing the contests based on the provided data, platform, isDesktop, and sortBy.
 *
 * @param {object} data - The data object containing the contests.
 * @param {string} platform - The title of the platform.
 * @param {boolean} isDesktop - Whether the device is desktop or not.
 * @param {string} sortBy - The sorting method.
 * @returns {JSX.Element} - The table containing the contests.
 */
export function sortContests(data, platform, sortBy) {
  const contests = [];
  const platforms = { ...data.data };
  platform = platform.toLowerCase();

  if (platform === "all")
    for (const [key, value] of Object.entries(platforms))
      for (const contest of value) {
        if (getSecondsDifference(contest.startTime) < 0) continue;
        contests.push({ ...contest, platform: key });
      }
  else
    for (const contest of platforms[platform]) {
      if (getSecondsDifference(contest.startTime) < 0) continue;
      contests.push({ ...contest, platform });
    }

  // sort the contests based on the sortBy parameter
  contests.sort((a, b) => {
    if (sortBy === "startTime" || platform !== "all") {
      return (
        getSecondsDifference(a.startTime) - getSecondsDifference(b.startTime)
      );
    } else {
      const platformA = a.platform.toLowerCase();
      const platformB = b.platform.toLowerCase();

      if (platformA < platformB) return -1;
      if (platformA > platformB) return 1;

      return 0;
    }
  });

  return contests;
}

/**
 * Generates a table of placeholder contest data.
 * @param {boolean} isDesktop - A boolean value indicating whether the table is being generated for a desktop view or not.
 * @returns {Array} - An array of table rows representing the placeholder contest data.
 */
export function placeholderContests(isDesktop) {
  const maxLen = isDesktop ? 50 : 33;

  const contests = [
    {
      name: "Loading Contests...........................",
      startingIn: "10 seconds",
    },
    {
      name: "Loading Contests...........................",
      startingIn: "23 seconds",
    },
    {
      name: "Loading Contests...........................",
      startingIn: "1 hour",
    },
    {
      name: "Loading Contests...........................",
      startingIn: "2 hours",
    },
    {
      name: "Loading Contests...........................",
      startingIn: "now...",
    },
  ];

  const table = contests.map((contest) => {
    const { name, startingIn } = contest;
    const placeholder = "Loading";

    return (
      <tr
        className="border-b border-gray-800 bg-gray-900"
        key={contests.indexOf(contest)}
      >
        <th scope="row" className="px-6 py-4 font-medium">
          {placeholder}
        </th>
        <th className="whitespace-nowrap px-6 py-4 font-medium text-white">
          {trimString(name, maxLen)}
        </th>
        <td className="px-6 py-4">{startingIn}</td>
        <td className="px-6 py-4">0</td>
        <td className="px-6 py-4">{externalLink("#", "Atcoder")}</td>
        <td className="px-6 py-4">
          {generateGoogleCalendarLink(
            "2021-09-14T09:00:00Z",
            0,
            "No Contests Available",
            "",
            "None",
          )}
        </td>
      </tr>
    );
  });

  return table;
}

export function getEncodedDate(date) {
  const dt = new Date(date);
  const year = dt.getFullYear();
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const day = dt.getDate().toString().padStart(2, "0");
  const hours = dt.getHours().toString().padStart(2, "0");
  const minutes = dt.getMinutes().toString().padStart(2, "0");
  const seconds = dt.getSeconds().toString().padStart(2, "0");
  const encodedDate = `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
  return encodedDate;
}

export function generateGoogleCalendarLink(
  startTime,
  durationSeconds,
  name,
  url,
  platform,
) {
  const startDate = new Date(startTime);
  const endDate = new Date(startDate.getTime() + durationSeconds * 1000);
  const encodedStartDate = getEncodedDate(startDate);
  const encodedEndDate = getEncodedDate(endDate);
  const details = `
<b>Name      :</b> ${name}
<b>Platform  :</b> ${platform}
<b>Link      :</b> <a href="${url}">here</a>

<b>Created by:</b> <a href="https://contest-hive.vercel.app/">Contest Hive</a>
  `.trim();
  const title = `Contest at ${platform}: ${name}`;

  const eventLink = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=${encodedStartDate}/${encodedEndDate}&details=${details}&location=${url}`;
  const linkJsx = (
    <Link
      href={encodeURI(eventLink)}
      title="Google Calendar Reminder"
      target="_blank"
    >
      <svg
        version="1.1"
        viewBox="0 0 200 200"
        className="absolute -mt-3 h-6 w-6 transition-all duration-300 hover:h-7 hover:w-7"
      >
        <g>
          <g transform="translate(3.75 3.75)">
            <path
              fill="#FFFFFF"
              d="M148.882,43.618l-47.368-5.263l-57.895,5.263L38.355,96.25l5.263,52.632l52.632,6.579l52.632-6.579
			l5.263-53.947L148.882,43.618z"
            />
            <path
              fill="#1A73E8"
              d="M65.211,125.276c-3.934-2.658-6.658-6.539-8.145-11.671l9.132-3.763c0.829,3.158,2.276,5.605,4.342,7.342
			c2.053,1.737,4.553,2.592,7.474,2.592c2.987,0,5.553-0.908,7.697-2.724s3.224-4.132,3.224-6.934c0-2.868-1.132-5.211-3.395-7.026
			s-5.105-2.724-8.5-2.724h-5.276v-9.039H76.5c2.921,0,5.382-0.789,7.382-2.368c2-1.579,3-3.737,3-6.487
			c0-2.447-0.895-4.395-2.684-5.855s-4.053-2.197-6.803-2.197c-2.684,0-4.816,0.711-6.395,2.145s-2.724,3.197-3.447,5.276
			l-9.039-3.763c1.197-3.395,3.395-6.395,6.618-8.987c3.224-2.592,7.342-3.895,12.342-3.895c3.697,0,7.026,0.711,9.974,2.145
			c2.947,1.434,5.263,3.421,6.934,5.947c1.671,2.539,2.5,5.382,2.5,8.539c0,3.224-0.776,5.947-2.329,8.184
			c-1.553,2.237-3.461,3.947-5.724,5.145v0.539c2.987,1.25,5.421,3.158,7.342,5.724c1.908,2.566,2.868,5.632,2.868,9.211
			s-0.908,6.776-2.724,9.579c-1.816,2.803-4.329,5.013-7.513,6.618c-3.197,1.605-6.789,2.421-10.776,2.421
			C73.408,129.263,69.145,127.934,65.211,125.276z"
            />
            <path
              fill="#1A73E8"
              d="M121.25,79.961l-9.974,7.25l-5.013-7.605l17.987-12.974h6.895v61.197h-9.895L121.25,79.961z"
            />
            <path
              fill="#EA4335"
              d="M148.882,196.25l47.368-47.368l-23.684-10.526l-23.684,10.526l-10.526,23.684L148.882,196.25z"
            />
            <path
              fill="#34A853"
              d="M33.092,172.566l10.526,23.684h105.263v-47.368H43.618L33.092,172.566z"
            />
            <path
              fill="#4285F4"
              d="M12.039-3.75C3.316-3.75-3.75,3.316-3.75,12.039v136.842l23.684,10.526l23.684-10.526V43.618h105.263
			l10.526-23.684L148.882-3.75H12.039z"
            />
            <path
              fill="#188038"
              d="M-3.75,148.882v31.579c0,8.724,7.066,15.789,15.789,15.789h31.579v-47.368H-3.75z"
            />
            <path
              fill="#FBBC04"
              d="M148.882,43.618v105.263h47.368V43.618l-23.684-10.526L148.882,43.618z"
            />
            <path
              fill="#1967D2"
              d="M196.25,43.618V12.039c0-8.724-7.066-15.789-15.789-15.789h-31.579v47.368H196.25z"
            />
          </g>
        </g>
      </svg>
    </Link>
  );
  return linkJsx;
}

export function externalLink(url, alt) {
  const linkJsx = (
    <Link href={url} alt={alt} target="_blank" title="Open Contest Link in new Tab">
      <svg
        className="absolute -mt-3 h-5 w-5 text-gray-400 transition-all duration-200 hover:h-6 hover:w-6 hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
        />
      </svg>
    </Link>
  );
  return linkJsx;
}

// function that will take a list of contests and make slices of it.
export function paginateContests(contests, currentPage, contestsPerPage) {
  const startIndex = (currentPage - 1) * contestsPerPage;
  const endIndex = startIndex + contestsPerPage;
  const paginatedContests = contests.slice(startIndex, endIndex);
  return paginatedContests;
}

export function generatePageNumbers(currentPage, totalPages) {
  const numberList = [];

  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      numberList.push(i);
    }
  } else {
    const midpoint = Math.floor((currentPage + totalPages) / 2);

    if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        numberList.push(i);
      }
    } else if (currentPage >= totalPages - 2) {
      for (let i = totalPages - 3; i <= totalPages; i++) {
        numberList.push(i);
      }
    } else {
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        numberList.push(i);
      }
      numberList.push(midpoint);
    }
  }

  return numberList;
}

/**
 * Takes a number as input and returns a simplified version of the number with a suffix indicating the magnitude.
 * @param {number} number - The number to be simplified.
 * @returns {string} - The simplified version of the input number with a suffix indicating the magnitude.
 */
export function simplifyNumber(number) {
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

// function that will take a utc 8601 format date and a duration seconds and return the end time in utc 8601 format.
export function getEndTime(startTime, durationSeconds) {
  const startDate = new Date(startTime);
  const endDate =
    new Date(startDate.getTime() + durationSeconds * 1000)
      .toISOString()
      .slice(0, -5) + "Z";

  return endDate;
}
