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
  ...props // Collect other props
}: {
  children: React.ReactNode;
  content: React.ReactNode | string;
  className?: string;
  innerClassName?: string;
  delayDuration?: number;
  title?: string;
  [key: string]: any;
}) {
  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={delayDuration}>
          <TooltipTrigger
            className={cn("hidden md:block", innerClassName)}
            {...props}
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
          {...props}
        >
          {children}
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            "max-w-md text-balance px-2 text-center text-xs font-normal",
            className,
          )}
        >
          {content}
        </PopoverContent>
      </Popover>
    </>
  );
}
