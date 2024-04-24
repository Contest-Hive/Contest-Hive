import { useState } from "react";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
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

import { timeToReadableTime, secondsToShortReadableTime } from "@/lib/utils";
import SelectPlatform from "./SelectPlatform";

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
  const perPage = 10;
  const totalPages = Math.ceil(contestData.length / perPage);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Contests</CardTitle>
        <CardDescription>Below are the upcoming contests</CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>Filter</TableHead>
              <TableHead>
                <SelectPlatform />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contestData.map((contest, index) => {
              return getContestRow(contest, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function getContestRow(contest: Contest, index: number) {
  const flexClass = "flex items-center justify-start my-0.5";
  const HeaderClass =
    "text-sm font-medium md:text-base w-20 flex justify-between mr-2";
  return (
    <TableRow key={index} className="w-[700px]">
      <TableCell className="table-cell">
        <span className="flex items-center justify-start gap-1 text-xs text-muted-foreground">
          <Image
            // src={`/assets/svgs/${contest.platform.toLocaleLowerCase()}.svg`}
            src={`/assets/svgs/atcoder.svg`}
            alt="meo"
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
          <p className="min-w-[300px] text-xs md:text-sm lg:text-base">
            {contest.title}
          </p>
        </div>
        <div className={flexClass}>
          <span className={HeaderClass}>
            <p>Starts In</p>:
          </span>
          <Badge>{timeToReadableTime(contest.startTime)}</Badge>
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
