import Image from "next/image";
import Link from "next/link";

import ResponsiveTooltip from "@/components/ui/responsiveTooltip";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  timeToReadableTime,
  secondsToShortReadableTime,
  timeToLocalTime,
  getGoogleCalenderLink,
} from "@/lib/helpers";
import { getPlatformLogo } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Link2, CalendarPlus } from "lucide-react";

import type { ContestType } from "@/lib/types";

export default function Contest(contest: ContestType, index: number) {
  const flexClass = "flex items-center justify-start my-2 md:my-1";
  const HeaderClass =
    "text-sm font-medium md:text-base min-w-20 flex justify-between mr-2";
  return (
    <TableRow key={index}>
      <TableCell className="table-cell">
        <span className="flex items-center justify-start gap-1 text-xs text-muted-foreground">
          <Image
            src={getPlatformLogo(contest.platform)}
            alt="Platform Logo"
            width={1}
            height={1}
            className="h-5 w-5 rounded-sm"
          />
          {contest.platform}
        </span>
        <div className={flexClass}>
          <span className={HeaderClass}>
            <p>Title</p>:
          </span>

          <Link
            href={contest.url}
            className="group flex min-w-64 items-center justify-start gap-1 text-xs font-semibold text-primary underline-offset-2 hover:underline md:text-sm"
            target="_blank"
          >
            {contest.title}
            <Link2 className="mt-0.5 hidden h-4 w-4 -rotate-45 group-hover:block" />
          </Link>
        </div>
        <div className={flexClass}>
          <span className={HeaderClass}>
            <p>Starts In</p>:
          </span>
          <span className="flex items-center justify-start gap-2">
            <ResponsiveTooltip
              content={timeToLocalTime(contest.startTime)}
              className="w-54 text-xs font-semibold"
            >
              <Badge>
                {timeToReadableTime(contest.startTime)}
              </Badge>
            </ResponsiveTooltip>

            <ResponsiveTooltip
              content="Add to Google Calendar"
              className="w-54 text-xs font-semibold"
              innerClassName="absolute z-10 ml-[95px] mt-9 md:ml-[133px]"
            >
              <Link
                href={getGoogleCalenderLink(contest)}
                // I know it's a mess! :3
                target="_blank"
                className={cn(
                  "h-8 w-8",
                  buttonVariants({
                    variant: "outline",
                    size: "icon",
                  }),
                )}
              >
                <p className="sr-only">Add to calender</p>
                <CalendarPlus className="h-5 w-5 text-primary" />
              </Link>
            </ResponsiveTooltip>
          </span>
        </div>
        <div className={flexClass}>
          <span className={HeaderClass}>
            <p>Duration</p>:
          </span>
          <Badge variant="secondary">
            {secondsToShortReadableTime(contest.duration)}
          </Badge>
        </div>
      </TableCell>
    </TableRow>
  );
}
