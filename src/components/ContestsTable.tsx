import { useEffect, useState, useTransition } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import SelectPlatform from "./SelectPlatform";
import SearchBar from "./SearchBar";
import Contest from "./Contest";
// import ContestSkeleton from "./ContestSkeleton";

import type { ContestType } from "@/lib/types";

const PLATFORMS = [
  "Atcoder",
  "Codeforces",
  "Codeforces Gym",
  "CodeChef",
  "HackerEarth",
  "HackerRank",
  "LeetCode",
  "Toph",
];

export default function ContestsTable({
  contestData,
}: {
  contestData: ContestType[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const [filteredData, setFilteredData] = useState(contestData);
  const perPage = 5; // Number of contests per page
  const length = filteredData.length;
  const totalPages = Math.ceil(length / perPage);

  const [currentPage, setCurrentPage] = useState(
    Math.min(Number(searchParams.get("page")) || 0, totalPages - 1),
  );
  const [platform, setPlatform] = useState(
    searchParams.get("platform") || "All",
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );

  useEffect(() => {
    const params = new URLSearchParams();
    const prevPlatform = searchParams.get("platform");

    if (prevPlatform === platform) return;

    params.set("platform", platform);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });

    setCurrentPage(0);

    // if previousPlatform !== platform, then filter the data
    if (platform === "All" || platform === undefined) {
      setFilteredData(contestData);
    } else if (PLATFORMS.includes(platform)) {
      console.log(`Changing platform to ${platform}`);
      setFilteredData(
        contestData.filter(
          (contest) =>
            contest.platform === platform ||
            (platform === "Codeforces Gym" && contest.platform === "CF GYM"),
        ),
      );
    }
    // NOTE: Do not add `contestData` to the dependencies array
  }, [platform, pathname, router, searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const page = Math.min(currentPage, totalPages - 1);
    const params = new URLSearchParams();
    params.set("platform", platform);
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [currentPage, totalPages, pathname, router, platform]);

  useEffect(() => {
    setCurrentPage(0);

    startTransition(() => {
      console.log(`Searching for ${searchQuery}`);
      if (searchQuery === "") {
        setFilteredData(contestData);
      } else {
        setFilteredData(
          contestData.filter(
            (contest) =>
              contest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              contest.platform
                .toLowerCase()
                .includes(searchQuery.toLowerCase()),
          ),
        );
      }
    });
    // NOTE: Do not add `contestData` to the dependencies array
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

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
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData
              .slice(currentPage * perPage, perPage * (currentPage + 1))
              .map((contest, index) => {
                return Contest(contest, index);
              })}

            {/* 
            On the last page, if the number is not a multiple of perPage, add skeleton cards
            */}
            {/* {currentPage === totalPages - 1 &&
              Array.from({ length: perPage - (length % perPage) }).map(
                (_, index) => {
                  return ContestSkeleton(index);
                },
              )} */}
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
