"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import ResponsiveTooltip from "@/components/ui/responsiveTooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

import {
  timeToReadableTime,
  secondsToShortReadableTime,
  IsoTimeToLocalTime,
  getUserTimezone,
} from "@/lib/helpers/datetime";
import { getGoogleCalenderLink } from "@/lib/helpers/others";

import { getPlatformLogoUrl } from "@/lib/helpers/others";
import { Link2, CalendarPlus, CalendarDays, Clock } from "lucide-react";

import type { ContestType } from "@/lib/types";
import { Separator } from "../ui/separator";

// Keep the function signature the same as it was originally
// since the parent component is calling it as a function
export default function Contest(contest: ContestType, index: number) {
  // We can't use hooks directly in this function if it's being called as a function
  // Instead, we'll use a component wrapper pattern
  return <ContestRow contest={contest} index={index} />;
}

// Create a proper React component that can use hooks
function ContestRow({ contest, index }: { contest: ContestType; index: number }) {
  // State to force re-render
  const [, setCurrentTime] = useState(new Date());

  // Set up an interval to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // This forces a re-render
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <TableRow key={index} suppressHydrationWarning>
      <TableCell className="py-1">
        <div className="mt-1 flex items-center justify-start">
          <Image
            priority
            src={getPlatformLogoUrl(contest.platform)}
            alt={contest.platform}
            width={1}
            height={1}
            className="-ml-0.5 mr-0.5 h-6 w-6 rounded-sm p-0.5 dark:bg-primary/95 md:mr-1"
          />
          <Link
            href={contest.url}
            className="group flex items-center justify-start gap-1 text-balance text-xs font-semibold text-primary underline-offset-2 hover:underline md:text-sm"
            target="_blank"
          >
            {contest.platform.toLowerCase().includes("gym") ||
              (1 && (
                <p className="text-xs -mx-0.5 mt-1 font-mono font-bold text-red-600 dark:text-blue-400">
                  [GYM]
                </p>
              ))}
            {contest.title}
            <Link2 className="mt-0.5 hidden h-4 w-4 -rotate-45 group-hover:block" />
          </Link>
        </div>
        <div className="mb-1 flex items-center justify-start md:pl-0">
          <div className="flex w-full items-center justify-start gap-2">
            <span className="flex min-w-32 items-center justify-start gap-1 md:w-36 ">
              <CalendarDays className="h-5 w-5 text-primary/70" />
              <ResponsiveTooltip
                content={`${IsoTimeToLocalTime(contest.startTime)} ${getUserTimezone()}`}
                className="w-60 flex items-center ml-2 md:ml-0 justify-center text-xs font-semibold"
              >
                <Badge variant="secondary">
                  {/* The component re-renders every second because of the useState and useEffect */}
                  {timeToReadableTime(contest.startTime)}
                </Badge>
              </ResponsiveTooltip>
            </span>

            <Separator orientation="vertical" className="h-6" />

            <span className="flex w-32 items-center justify-start gap-1">
              <Clock className="h-5 w-5 text-primary/70" />
              <Badge variant="outline">
                {secondsToShortReadableTime(contest.duration)}
              </Badge>
            </span>
            {/* <Separator orientation="vertical" className="h-6" /> */}
            <div className="flex items-center justify-end md:ml-auto">
              <ResponsiveTooltip
                content="Add to Google Calendar"
                className="min-w-54 text-xs font-semibold"
                tabIndex={-1}
              >
                <Button asChild variant="outline" size="icon">
                  <Link
                    href={getGoogleCalenderLink(contest)}
                    target="_blank"
                    className="mx-auto scale-90"
                  >
                    <p className="sr-only">Add to calender</p>
                    <CalendarPlus className="h-5 w-5 text-primary/70" />
                  </Link>
                </Button>
              </ResponsiveTooltip>
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}