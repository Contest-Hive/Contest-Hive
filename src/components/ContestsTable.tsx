import { useEffect, useState, useTransition, Suspense } from "react";
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
  compressed = false,
  perPage = 5,
}: {
  contestData: ContestType[];
  compressed?: boolean;
  perPage?: number;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainFunc
        contestData={contestData}
        compressed={compressed}
        perPage={perPage}
      />
    </Suspense>
  );
}

function MainFunc({
  contestData,
  compressed = false,
  perPage = 5,
}: {
  contestData: ContestType[];
  compressed?: boolean;
  perPage?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const [filteredData, setFilteredData] = useState(contestData);
  const length = filteredData.length;
  const totalPages = Math.ceil(length / perPage);
  const [currentPage, setCurrentPage] = useState(
    Math.min(Number(searchParams.get("page")) || 0, totalPages - 1, 0),
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
      if (searchQuery === "") {
        if (platform === "All" || platform === undefined) {
          setFilteredData(contestData);
        } else if (PLATFORMS.includes(platform)) {
          setFilteredData(
            contestData.filter(
              (contest) =>
                contest.platform === platform ||
                (platform === "Codeforces Gym" &&
                  contest.platform === "CF GYM"),
            ),
          );
        }
      } else {
        console.log("Meaw?");
        setFilteredData(
          contestData.filter((contest) => {
            const text = `${contest.title.toLowerCase()} ${contest.platform.toLowerCase()}`;
            const lowerSearchQuery = searchQuery.toLowerCase();
            const isPlatformMatch =
              platform === "Codeforces Gym" ? "CF GYM" : platform;

            if (platform === "All" || platform === undefined) {
              return text.includes(lowerSearchQuery);
            }

            return (
              contest.platform === isPlatformMatch &&
              text.includes(lowerSearchQuery)
            );
          }),
        );
      }
    });
    // NOTE: Do not add `contestData` to the dependencies array
    // IDK why, but it causes an infinite loop
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  // arrow right and left = next and previous page
  useHotkeys("right", () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  });
  useHotkeys("left", () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  });

  return (
    <Card className="font-sans">
      <CardHeader className="px-7 py-5">
        <CardTitle className="font-bold md:text-3xl">
          Upcoming Contests
        </CardTitle>
        {!compressed ? (
          <CardDescription className="mx-0.5">
            Below are the upcoming contests from{" "}
            <span className="font-mono font-semibold">
              {platform === "All" ? "all platforms" : platform}.
            </span>
          </CardDescription>
        ) : (
          <CardDescription className="mx-0.5 font-semibold">
            Enable Focus Mode
            <span className="font-mono font-normal">(alt+f)</span> for better
            experience
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="my-2 flex items-center gap-2 px-0.5 md:px-2">
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
        <p className="px-0.5 font-mono text-xs text-muted-foreground md:px-4 md:text-sm">
          Showing {Math.min(currentPage * perPage + 1, length)}-
          {Math.min((currentPage + 1) * perPage, length)} out of {length}
        </p>
        <span className="flex select-none justify-end gap-2">
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
