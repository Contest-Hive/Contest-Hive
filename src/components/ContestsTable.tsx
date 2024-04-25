import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useHotkeys } from "react-hotkeys-hook";

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
            <svg
              width="1"
              height="1"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 hidden h-5 w-5 group-hover:block"
            >
              <path
                d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
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
