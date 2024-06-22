import Link from "next/link";

import { Link2, CalendarPlus } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function ContestSkeleton(index: number) {
  const flexClass = "flex items-center justify-start my-0.5";
  const HeaderClass =
    "text-sm font-medium md:text-base min-w-20 flex justify-between mr-2";
  return (
    <TableRow key={index}>
      <TableCell className="table-cell">
        <span className="flex items-center justify-start gap-1 text-xs text-muted-foreground">
          <Skeleton className="h-4 w-4 bg-muted-foreground" />
          <Skeleton className="h-4 w-14 bg-muted-foreground" />
        </span>
        <div className={flexClass}>
          <span className={HeaderClass}>
            <p>Title</p>:
          </span>

          <Link
            href="#"
            className="group flex min-w-64 items-center justify-start gap-1 text-xs font-semibold text-primary underline-offset-2 hover:underline md:text-sm"
            target="_blank"
          >
            <Skeleton className="h-4 w-32 bg-muted-foreground" />
            <Link2 className="mt-0.5 hidden h-4 w-4 -rotate-45 group-hover:block" />
          </Link>
        </div>
        <div className={flexClass}>
          <span className={HeaderClass}>
            <p>Starts In</p>:
          </span>
          <span className="flex items-center justify-start gap-2">
            <HoverCard>
              <HoverCardTrigger>
                <Skeleton className="h-4 min-w-20 bg-muted-foreground" />
              </HoverCardTrigger>
              <HoverCardContent className="w-54 text-xs">
                <p className="font-semibold ">
                  <Skeleton className="h-4 w-20 bg-muted-foreground" />
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger
                className="absolute z-10 ml-[95px] mt-9 md:ml-[133px]"
                asChild
              >
                <Link
                  href="#"
                  target="_blank"
                  className={cn(
                    "h-8 w-8",
                    buttonVariants({
                      variant: "outline",
                      size: "icon",
                    }),
                  )}
                >
                  <CalendarPlus className="h-5 w-5 text-primary" />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-54 text-xs font-semibold">
                Add to Google Calendar
              </HoverCardContent>
            </HoverCard>
          </span>
        </div>
        <div className={flexClass}>
          <span className={HeaderClass}>
            <p>Duration</p>:
          </span>
          <Skeleton className="h-4 w-14 bg-muted-foreground" />
        </div>
      </TableCell>
    </TableRow>
  );
}
