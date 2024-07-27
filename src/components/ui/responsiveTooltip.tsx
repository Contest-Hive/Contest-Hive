"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function ResponsiveTooltip({
  children,
  content,
  className,
  innerClassName,
  delayDuration = 100,
  title,
}: {
  children: React.ReactNode;
  content: React.ReactNode | string;
  className?: string;
  innerClassName?: string;
  delayDuration?: number;
  title?: string;
}) {
  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={delayDuration}>
          <TooltipTrigger
            className={cn("hidden md:block", innerClassName)}
            title={title}
          >
            {children}
          </TooltipTrigger>
          <TooltipContent className={className}>{content}</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Popover for Mobile Phones */}
      <Popover>
        <PopoverTrigger
          className={cn("text-primary md:hidden", innerClassName)}
          title={title}
        >
          {children}
        </PopoverTrigger>
        <PopoverContent className={cn("mx-auto font-bold", className)}>
          {content}
        </PopoverContent>
      </Popover>
    </>
  );
}
