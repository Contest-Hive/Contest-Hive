import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

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
          {/* <ListFilter className="h-3.5 w-3.5" /> */}
          <Image
            src={`/assets/svgs/platforms/${platform.includes("Gym") ? "codeforces" : platform.toLocaleLowerCase()}.svg`}
            alt="Platform Logo"
            width={1}
            height={1}
            className="h-5 w-5 rounded-sm"
          />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Platform
          </span>
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
              src={`/assets/svgs/platforms/${plt.includes("Gym") ? "codeforces" : plt.toLocaleLowerCase()}.svg`}
              alt="Platform Logo"
              width={1}
              height={1}
              className="h-5 w-5 rounded-sm"
            />
            {plt}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
