import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function secondsToReadableTime(s: number) {
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

export function secondsToShortReadableTime(s: number) {
  if (!s) {
    return "13s";
  }

  const seconds = s % 60;
  const minutes = Math.floor(s / 60) % 60;
  const hours = Math.floor(s / 3600) % 24;
  const days = Math.floor(s / 86400);

  let result = "";

  if (days > 0) {
    result += `${days}d`;
  }
  if (hours > 0) {
    result += `${result ? " " : ""}${hours}h`;
  }
  if (minutes > 0) {
    result += `${result ? " " : ""}${minutes}m`;
  }
  if (!result) {
    result = `${seconds}s`;
  }

  return result;
}

export function getSecondsDifferencesFromNow(isoTime: string) {
  const startDate = new Date();
  const endDate = new Date(isoTime);

  const differenceInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;

  return Math.floor(differenceInSeconds);
}

export function timeToReadableTime(isoTime: string) {
  return secondsToShortReadableTime(getSecondsDifferencesFromNow(isoTime));
}

export function timeToLocalTime(isoTime: string) {
  const dt = new Date(isoTime);
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

// function that will take a utc 8601 format date and a duration seconds and return the end time in utc 8601 format.
export function getEndTime(isoStartTime: string, durationSeconds: number) {
  const startDate = new Date(isoStartTime);
  const endDate =
    new Date(startDate.getTime() + durationSeconds * 1000)
      .toISOString()
      .slice(0, -5) + "Z";

  return endDate;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimString(str: string, maxLen: number) {
  if (str.length <= maxLen) {
    return str;
  }
  return str.slice(0, maxLen - 3) + "...";
}
