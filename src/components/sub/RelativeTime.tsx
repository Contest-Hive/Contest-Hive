import React from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface RelativeTimeProps {
  utcTime: string; // ISO UTC timestamp
  className?: string;
}

const RelativeTime: React.FC<RelativeTimeProps> = ({ utcTime, className }) => {
  const getRelativeTime = (utcDateString: string) => {
    const utcDate = new Date(utcDateString);
    const now = new Date();

    const diffTime = Math.abs(now.getTime() - utcDate.getTime());
    const diffMinutes = Math.floor(diffTime / (1000 * 60));

    if (diffMinutes === 0) return "Now";

    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm tracking-wide text-primary/70",
        className,
      )}
    >
      <Clock className="text-emerald-500" strokeWidth={2} size={18} />
      <span className="font-normal">Last Updated:</span>
      <time dateTime={utcTime} className="font-semibold">
        {getRelativeTime(utcTime)}
      </time>
    </div>
  );
};

export default RelativeTime;
