import Image from "next/image";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

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
import { PLATFORMS } from "@/lib/constants";

/**
 * Renders a dropdown menu for selecting a programming platform.
 *
 * This React component displays a button showing the logo and name of the current platform. Clicking the button opens a menu listing all available platforms. Selecting a platform triggers the update callback.
 *
 * @param platform - The currently selected platform.
 * @param setPlatform - Callback to update the selected platform.
 */
export default function SelectPlatform({
  platform,
  setPlatform,
}: {
  platform: string;
  setPlatform: (platform: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) triggerRef.current?.blur();
  };

  useHotkeys(
    "\\",
    (e) => {
      e.preventDefault();
      handleOpenChange(!open);
    },
    {
      enableOnFormTags: false, // Prevents triggering while typing in inputs
    },
  );

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          ref={triggerRef}
          variant="outline"
          size="sm"
          className="h-10 select-none justify-start gap-1 md:min-w-24"
        >
          <Image
            priority
            src={getPlatformLogoUrl(platform)}
            alt={platform}
            width={1}
            height={1}
            className="mr-1.5 h-6 w-6 rounded-sm p-0.5 dark:bg-primary"
          />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            {platform}
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="pr-2"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          triggerRef.current?.blur();
        }}
      >
        <DropdownMenuLabel>Select Platform</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {PLATFORMS.map((plt) => (
          <DropdownMenuCheckboxItem
            key={plt}
            checked={plt === platform}
            onClick={() => {
              setPlatform(plt);
              handleOpenChange(false);
            }}
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
