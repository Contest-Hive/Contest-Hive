import { secondsToReadableTime, getEncodedDate, IsoTimeToLocalTime, getUserTimezone} from "@/lib/helpers/datetime";

import type { ContestType } from "@/lib/types";


export function getGoogleCalenderLink(contest: ContestType) {
  const encodedStartTime = getEncodedDate(contest.startTime);
  const encodedEndTime = getEncodedDate(contest.endTime);
  const text = `
<pre>
<b>Title        :</b> ${contest.title}
<b>Platform     :</b> ${contest.platform}
<b>Starts At    :</b> ${IsoTimeToLocalTime(contest.startTime, true)} (${getUserTimezone()})
<b>Ends At      :</b> ${IsoTimeToLocalTime(contest.endTime, true)} (${getUserTimezone()})
<b>Duration     :</b> ${secondsToReadableTime(contest.duration)}
<b>Contest Link :</b> <a href="${contest.url}">here</a>

<b>Created by   :</b> <a href="https://contest-hive.vercel.app/">Contest Hive</a>
</pre>
    `.trim();

  const params = new URLSearchParams({
    text: contest.title,
    dates: `${encodedStartTime}/${encodedEndTime}`,
    details: text,
    location: contest.url,
  });

  const finalUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?${params.toString()}`;
  // console.log(finalUrl)
  return finalUrl;
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
