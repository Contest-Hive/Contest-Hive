import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ListFilter } from "lucide-react";

const PLATFORMS = [
  "All",
  "Atcoder",
  "Codeforces",
  "Codeforces Gym",
  "CodeChef",
  "HackerEarth",
  "HackerRank",
  "LeetCode",
  "Toph",
];

export default function SelectPlatform({
  platform,
  setPlatform,
}: {
  platform: string;
  setPlatform: (platform: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-10 gap-1">
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Platform
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <ScrollArea className="h-52 w-44 rounded-md">
          <DropdownMenuLabel>Select Platform</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {PLATFORMS.map((plt) => (
            <DropdownMenuCheckboxItem
              key={plt}
              checked={plt === platform}
              onClick={() => setPlatform(plt)}
              className="flex items-center justify-start gap-2 text-xs md:text-sm"
            >
              <Image
                // src={`/assets/svgs/${contest.platform.toLocaleLowerCase()}.svg`}
                src={`/assets/svgs/atcoder.svg`}
                alt="Platform Logo"
                width={1}
                height={1}
                className="h-4 w-4"
              />
              {plt}
            </DropdownMenuCheckboxItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
