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
  delayDuration,
}: {
  children: React.ReactNode;
  content: React.ReactNode | string;
  className?: string;
  innerClassName?: string;
  delayDuration?: number;
}) {
  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={delayDuration}>
          <TooltipTrigger className={cn("hidden md:block", innerClassName)}>
            {children}
          </TooltipTrigger>
          <TooltipContent className={className}>{content}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      {/* Popover for Mobile Phones */}
      <Popover>
        <PopoverTrigger
          className={cn("text-primary md:hidden", innerClassName)}
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
