"use client";
import Anchor from "./typography/Anchor";

import { useHotkeys } from "react-hotkeys-hook";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useTransition,
} from "react";
import {
  Card,
  CardContent,
  CardDescriptionDiv,
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

import SelectPlatform from "./sub/SelectPlatform";
import SelectPerPage from "./sub/SelectPerPage";
import SearchBar from "./sub/SearchBar";
import Contest from "./sub/Contest";
// import ContestSkeleton from "./ContestSkeleton";
import ExpandOrShrink from "./sub/ExpandOrShrink";

import SearchText from "@/lib/helpers/search";
import type { ContestType } from "@/lib/types";
import { cn } from "@/lib/utils";

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
  compressed = false,
  perPage,
  setPerPage,
  isExpanded = null,
  handleToggleExpanded,
}: {
  contestData: ContestType[];
  compressed?: boolean;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<string>>;
  isExpanded?: boolean;
  handleToggleExpanded?: any;
}) {
  const [isPending, startTransition] = useTransition();

  const [filteredData, setFilteredData] = useState(contestData);
  const length = filteredData.length;

  const totalPages = Math.ceil(length / perPage);
  const [currentPage, setCurrentPage] = useState(
    Math.min(0, Math.abs(totalPages - 1)), // Prevent negative values using abs
  );

  const [platform, setPlatform] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setCurrentPage(0);

    startTransition(() => {
      if (searchQuery.trim() === "") {
        if (platform === "All") {
          setFilteredData(contestData);
        } else if (PLATFORMS.includes(platform)) {
          setFilteredData(
            contestData.filter((contest) => {
              const isPlatformMatch =
                platform === "Codeforces Gym" ? "CF GYM" : platform;
              return contest.platform === isPlatformMatch;
            }),
          );
        }
      } else {
        // Search the Contests
        setFilteredData(
          contestData.filter((contest) => {
            const text = `${contest.title.toLowerCase()} ${contest.platform.toLowerCase()}`;
            const expectedPlatform =
              platform === "Codeforces Gym" ? "CF GYM" : platform;

            if (platform === "All") {
              return SearchText(text, searchQuery);
            }

            return (
              expectedPlatform === contest.platform &&
              SearchText(text, searchQuery)
            );
          }),
        );
      }
    });
  }, [searchQuery, platform, contestData]);

  // use effect for platform change
  useEffect(() => {
    setCurrentPage(0);
    if (platform === "All") {
      setFilteredData(contestData);
    } else {
      setFilteredData(
        contestData.filter((contest) => {
          const isPlatformMatch =
            platform === "Codeforces Gym" ? "CF GYM" : platform;
          return contest.platform === isPlatformMatch;
        }),
      );
    }
  }, [platform, contestData]);

  // arrow right and left => next and previous page
  useHotkeys("right", () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  });
  useHotkeys("left", () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  });

  return (
    <Card className="font-sans" id="contest-table">
      <CardHeader className="px-1 py-1 md:px-7">
        <CardTitle
          className={cn(
            "relative mt-1.5 border-b px-2 py-2 text-3xl font-bold md:text-4xl",
            compressed && "md:my-2 md:py-3",
          )}
        >
          Upcoming Contests
          {isExpanded !== null && (
            <div className="absolute right-3 top-1 hidden xl:block">
              <ExpandOrShrink
                isExpanded={isExpanded}
                handleToggleExpanded={handleToggleExpanded}
              />
            </div>
          )}
        </CardTitle>

        <CardDescriptionDiv className="px-0.5">
          {compressed && (
            <span className="block px-1.5 font-semibold">
              Go to the
              <Anchor href="/focused" className="p-0 underline">
                focused
              </Anchor>
              page for a better experience.
            </span>
          )}

          <div className="mb-1 mt-4 flex items-center justify-start gap-2">
            <SelectPlatform platform={platform} setPlatform={setPlatform} />
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </CardDescriptionDiv>
      </CardHeader>
      <CardContent className="px-1 md:px-7">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border-b border-t bg-muted/50 py-0">
                <p className="text-xs font-semibold tracking-wider md:text-sm">
                  Showing{" "}
                  <span className="font-bold text-primary/80">
                    {Math.min(currentPage * perPage + 1, length)}-
                    {Math.min((currentPage + 1) * perPage, length)}
                  </span>{" "}
                  out of{" "}
                  <span className="font-bold text-primary/80">{length}</span>{" "}
                  contests
                </p>
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
      <CardContent className="flex justify-between">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold md:text-sm">
          <p className="hidden md:block">Show Per Page:</p>
          <p className="block md:hidden">Show:</p>
          <SelectPerPage perPage={perPage} setPerPage={setPerPage} />
        </div>
        <span className="flex select-none items-center justify-center gap-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 0 || totalPages === 0}
          >
            Previous
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages - 1 || totalPages === 0}
          >
            Next
          </Button>
        </span>
      </CardContent>
    </Card>
  );
}
