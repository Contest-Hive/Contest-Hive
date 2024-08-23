import { secondsToReadableTime, getEncodedDate } from "@/lib/helpers/datetime";

import type { ContestType } from "@/lib/types";

export function getGoogleCalenderLink(contest: ContestType) {
  const encodedStartTime = getEncodedDate(contest.startTime);
  const encodedEndTime = getEncodedDate(contest.endTime);
  const text = `
  <b>Title      :</b> ${contest.title}
  <b>Platform   :</b> ${contest.platform}
  <b>Duration   :</b> ${secondsToReadableTime(contest.duration)}
  <b>Link       :</b> <a href="${contest.url}">here</a>
  
  <b>Created by:</b> <a href="https://contest-hive.vercel.app/">Contest Hive</a>
    `.trim();
  return encodeURI(
    `https://calendar.google.com/calendar/u/0/r/eventedit?text=${contest.title}&dates=${encodedStartTime}/${encodedEndTime}&details=${text}&location=${contest.url}`,
  );
}

export function getPlatformLogoUrl(
  platform: string,
  transparent: boolean = true,
) {
  let plt = platform.toLowerCase();
  if (plt.includes("codeforces") || plt.includes("cf")) {
    plt = "codeforces";
  }

  return `/assets/svgs/platforms${transparent && "/transparent"}/${plt}.svg`;
}
