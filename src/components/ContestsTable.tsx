import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useHotkeys } from "react-hotkeys-hook";

import { Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Button, buttonVariants } from "@/components/ui/button";

import { CalendarPlus } from "lucide-react";

import {
  timeToReadableTime,
  secondsToShortReadableTime,
  timeToLocalTime,
  getEncodedDate,
  secondsToReadableTime,
  cn,
} from "@/lib/utils";

import SelectPlatform from "./SelectPlatform";
import SearchBar from "./SearchBar";

type Contest = {
  title: string;
  url: string;
  startTime: string;
  endTime: string;
  duration: number;
  platform: string;
};

export default function ContestsTable({
  contestData,
}: {
  contestData: Contest[];
}) {
  const perPage = 5;
  const [filteredData, setFilteredData] = useState(contestData);
  const length = filteredData.length;
  const totalPages = Math.ceil(length / perPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [platform, setPlatform] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (platform === "All") {
      setFilteredData(contestData);
    } else {
      setFilteredData(
        contestData.filter(
          (contest) =>
            contest.platform === platform ||
            (platform === "Codeforces Gym" && contest.platform === "CF GYM"),
        ),
      );
    }
    setCurrentPage(0);
  }, [platform, contestData]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(contestData);
    } else {
      setFilteredData(
        contestData.filter(
          (contest) =>
            contest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contest.platform.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    }
    setCurrentPage(0);
  }, [searchQuery, contestData]);

  // arrow right and left = next and previous page
  useHotkeys("right", () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  });
  useHotkeys("left", () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  });
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Contests</CardTitle>
        <CardDescription>Below are the upcoming contests</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="flex items-center gap-2 px-0.5 md:px-2">
                <SelectPlatform platform={platform} setPlatform={setPlatform} />
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </TableHead>
              {/* <TableHead><SelectPlatform /></TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData
              .slice(currentPage * perPage, perPage * (currentPage + 1))
              .map((contest, index) => {
                return getContestRow(contest, index);
              })}
          </TableBody>
        </Table>
      </CardContent>
      <CardContent className="flex items-center justify-between">
        <p className="px-0.5 font-mono text-xs md:px-4 md:text-sm">
          Showing {Math.min(currentPage * perPage + 1, length)}-
          {Math.min((currentPage + 1) * perPage, length)} out of {length}
        </p>
        <span className="flex select-none justify-end gap-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </Button>
        </span>
      </CardContent>
    </Card>
  );
}

function getContestRow(contest: Contest, index: number) {
  const flexClass = "flex items-center justify-start my-0.5";
  const HeaderClass =
    "text-sm font-medium md:text-base min-w-20 flex justify-between mr-2";
  return (
    <TableRow key={index}>
      <TableCell className="table-cell">
        <span className="flex items-center justify-start gap-1 text-xs text-muted-foreground">
          <Image
            // src={`/assets/svgs/${contest.platform.toLocaleLowerCase()}.svg`}
            src={`/assets/svgs/atcoder.svg`}
            alt="Platform Logo"
            width={1}
            height={1}
            className="h-4 w-4"
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
            <Link2 className="h-4 w-4 -rotate-45 hidden group-hover:block mt-0.5" />
          </Link>
        </div>
        <div className={flexClass}>
          <span className={HeaderClass}>
            <p>Starts In</p>:
          </span>
          <span className="flex items-center justify-start gap-2">
            <HoverCard>
              <HoverCardTrigger>
                <Badge className="min-w-20">
                  {timeToReadableTime(contest.startTime)}
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="w-54 text-xs">
                <p className="font-semibold ">
                  {timeToLocalTime(contest.startTime)}
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger
                className="absolute z-10 ml-[95px] mt-9 md:ml-[133px]"
                asChild
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
                  <CalendarPlus className="h-5 w-5 text-primary" />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-54 text-xs font-semibold">
                Add to Google Calendar
              </HoverCardContent>
            </HoverCard>
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

function getGoogleCalenderLink(contest: Contest) {
  const text = `
<b>Title      :</b> ${contest.title}
<b>Platform   :</b> ${contest.platform}
<b>Duration   :</b> ${secondsToReadableTime(contest.duration)}
<b>Link       :</b> <a href="${contest.url}">here</a>

<b>Created by:</b> <a href="https://contest-hive.vercel.app/">Contest Hive</a>
  `.trim();
  return encodeURI(
    `https://calendar.google.com/calendar/u/0/r/eventedit?text=${contest.title}&dates=${getEncodedDate(contest.startTime)}/${getEncodedDate(contest.endTime)}&details=${text}&location=${contest.url}`,
  );
}
