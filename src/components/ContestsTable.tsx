"use client";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useTransition,
} from "react";
import { useHotkeys } from "react-hotkeys-hook";

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

// --- Helper Functions ---
import SearchText from "@/lib/helpers/search";

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
  compressed = false,
  perPage,
  setPerPage,
}: {
  contestData: ContestType[];
  compressed?: boolean;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<string>>;
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
      if (searchQuery === "") {
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

            if (platform === "All" || platform === undefined) {
              return SearchText(text, searchQuery);
            }

            return (
              expectedPlatform === platform && SearchText(text, searchQuery)
            );
          }),
        );
      }
    });
    // NOTE: Do not add `contestData` to the dependencies array
    // IDK why, but it causes an infinite loop
    // TODO: Add `contentsData` and see what is the actual problem.
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

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
      <CardHeader className="px-7 py-5">
        <CardTitle className="mb-2 border-b pb-2 text-2xl font-bold md:text-4xl">
          Upcoming Contests
        </CardTitle>
        <CardDescriptionDiv className="mx-0.5">
          {compressed ? (
            <>
              <span className="hidden font-semibold md:block">
                Enable Focus Mode
                <span className="font-mono">(alt+f)</span> for better experience
              </span>
              <span className="block font-semibold md:hidden">
                These are the upcoming contests you can participate in.
              </span>
            </>
          ) : (
            <span className="text-base">
              These are the upcoming contests you can participate in.
            </span>
          )}

          <div className="mt-8 flex items-center justify-start gap-2">
            <SelectPlatform platform={platform} setPlatform={setPlatform} />
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </CardDescriptionDiv>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border-b border-t bg-muted/50">
                <p className="text-xs font-normal tracking-wide md:text-sm">
                  Showing{" "}
                  <span className="font-bold">
                    {Math.min(currentPage * perPage + 1, length)}-
                    {Math.min((currentPage + 1) * perPage, length)}
                  </span>{" "}
                  out of <span className="font-bold">{length}</span> contests
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
