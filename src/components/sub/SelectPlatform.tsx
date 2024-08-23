import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import { getPlatformLogo } from "@/lib/helpers/getPlatformLogo";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { get } from "http";

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
        <Button variant="outline" size="sm" className="h-10 select-none gap-1">
          <span className="mr-0.5 h-5 w-5 rounded-sm md:mr-2 md:h-6 md:w-6">
            {getPlatformLogo(platform)}
          </span>
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Platform
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Select Platform</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {PLATFORMS.map((plt) => (
          <DropdownMenuCheckboxItem
            key={plt}
            checked={plt === platform}
            onClick={() => setPlatform(plt)}
            className="flex items-center justify-start gap-2 text-xs md:text-sm"
          >
            <span className="mr-0.5 h-5 w-5 rounded-sm md:mr-2 md:h-6 md:w-6">
              {getPlatformLogo(plt)}
            </span>
            {plt}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
