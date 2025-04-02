import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import { getPlatformLogoUrl } from "@/lib/helpers/others";
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
        <Button
          variant="outline"
          size="sm"
          className="h-10 min-w-24 select-none justify-start gap-1"
        >
          <Image
            priority
            src={getPlatformLogoUrl(platform)}
            alt={platform}
            width={1}
            height={1}
            className="h-6 w-6 rounded-sm p-0.5 dark:bg-primary"
          />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            {platform}
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
            <Image
              priority
              src={getPlatformLogoUrl(plt)}
              alt={plt}
              width={1}
              height={1}
              className="h-6 w-6 rounded-sm p-0.5 dark:bg-primary"
            />
            {plt}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
