import { randomInt } from "../utils";

export function secondsToReadableTime(s: number) {
  if (!s) {
    return "-1 second";
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

  if (seconds > 0) {
    result += `${result ? " " : ""}${seconds} second${seconds > 1 ? "s" : ""}`;
  }

  return result;
}

export function secondsToShortReadableTime(s: number, addSecond = false) {
  if (!s) {
    return "-1s";
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

  // if (seconds > 0) {
  if (addSecond) {
    result += `${result ? " " : ""} ${seconds}s`;
  }

  return result;
}

export function getSecondsDifferencesFromCurrentTime(isoTime: string) {
  const startDate = new Date();
  const endDate = new Date(isoTime);

  const differenceInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;

  return Math.floor(differenceInSeconds);
}

export function timeToReadableTime(isoTime: string) {
  const x = getSecondsDifferencesFromCurrentTime(isoTime);
  if (x < 1) return "Started";
  return secondsToShortReadableTime(x, true);
}

export function IsoTimeToLocalTime(isoTime: string) {
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

export function getEndTime(isoStartTime: string, durationSeconds: number) {
  const startDate = new Date(isoStartTime);
  const endDate =
    new Date(startDate.getTime() + durationSeconds * 1000)
      .toISOString()
      .slice(0, -5) + "Z";

  return endDate;
}

export function getRandomISOTime() {
  const randomDuration = randomInt(134902);
  const startDate = new Date();
  const endDate =
    new Date(startDate.getTime() + randomDuration * 1000)
      .toISOString()
      .slice(0, -5) + "Z";

  return endDate;
}

export function getEncodedDate(isoTime: string) {
  const dt = new Date(isoTime);
  const year = dt.getFullYear();
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const day = dt.getDate().toString().padStart(2, "0");
  const hours = dt.getHours().toString().padStart(2, "0");
  const minutes = dt.getMinutes().toString().padStart(2, "0");
  const seconds = dt.getSeconds().toString().padStart(2, "0");
  const encodedDate = `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
  return encodedDate;
}

export function getUserTimezone(): string {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZoneName: "short",
    });

    const parts = formatter.formatToParts(new Date());

    const timeZonePart = parts.find((part) => part.type === "timeZoneName");

    if (timeZonePart && timeZonePart.value) {
      return timeZonePart.value; // Return the timezone abbreviation (e.g., "BST").
    }
  } catch (error) {
    console.error("Error determining timezone:", error);
  }

  return "Local Time"; // Default fallback if timezone cannot be determined.
}
