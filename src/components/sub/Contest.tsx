import Image from "next/image";
import Link from "next/link";

import ResponsiveTooltip from "@/components/ui/responsiveTooltip";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

import {
  timeToReadableTime,
  secondsToShortReadableTime,
  IsoTimeToLocalTime,
} from "@/lib/helpers/datetime";
import { getGoogleCalenderLink } from "@/lib/helpers/others";

import { getPlatformLogo } from "@/lib/helpers/others";
import { cn } from "@/lib/utils";
import { Link2, CalendarPlus, CalendarDays, Clock } from "lucide-react";

import type { ContestType } from "@/lib/types";

export default function Contest(contest: ContestType, index: number) {
  return (
    <TableRow key={index}>
      <TableCell className="py-1">
        <div className="mt-1 flex items-center justify-start">
          <Image
            src={getPlatformLogo(contest.platform)}
            alt="Platform Logo"
            width={1}
            height={1}
            className="mr-0.5 h-5 w-5 rounded-sm md:mr-2 md:h-6 md:w-6"
          />
          <Link
            href={contest.url}
            className="group flex min-w-64 items-center justify-start gap-1 text-xs font-semibold text-primary underline-offset-2 hover:underline md:text-sm"
            target="_blank"
          >
            {contest.title}
            <Link2 className="mt-0.5 hidden h-4 w-4 -rotate-45 group-hover:block" />
          </Link>
        </div>
        <div className="mb-1 flex items-center justify-start md:pl-8">
          <div className="flex items-center justify-start gap-2">
            <span className="flex w-32 items-center justify-start gap-1 md:w-36 ">
              <CalendarDays className="h-5 w-5 text-primary/70" />
              <ResponsiveTooltip
                content={IsoTimeToLocalTime(contest.startTime)}
                className="w-54 text-xs font-semibold"
              >
                <Badge>{timeToReadableTime(contest.startTime)}</Badge>
              </ResponsiveTooltip>
            </span>

            <hr className="h-1.5 w-5 rotate-90 border-primary/50" />
            <span className="flex w-32 items-center justify-start gap-1">
              <Clock className="h-5 w-5 text-primary/70" />
              <Badge variant="secondary">
                {secondsToShortReadableTime(contest.duration)}
              </Badge>
            </span>
            {/* <hr className="h-1.5 w-5 rotate-90 border-primary/50" /> */}
            <ResponsiveTooltip
              content="Add to Google Calendar"
              className="w-54 text-xs font-semibold"
            >
              <Link
                href={getGoogleCalenderLink(contest)}
                // I know it's a mess! :3
                target="_blank"
                className={cn(
                  "scale-90",
                  buttonVariants({
                    variant: "outline",
                    size: "icon",
                  }),
                )}
              >
                <p className="sr-only">Add to calender</p>
                <CalendarPlus className="h-5 w-5 text-primary/70" />
              </Link>
            </ResponsiveTooltip>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
