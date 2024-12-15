import { useHotkeys } from "react-hotkeys-hook";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SVG = ({ className }: { className?: string }) => (
  <svg
    className={cn("m-0 h-8 w-8 text-primary/80", className)}
    width={1}
    hanging={1}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M16 10L12 14L8 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const ExpandOrShrink = ({
  isExpanded,
  handleToggleExpanded,
}: {
  isExpanded: boolean;
  handleToggleExpanded: () => void;
}) => {
  // ctrl+. or cmd+. for toggle
  useHotkeys("mod+.", handleToggleExpanded);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="group max-w-12"
            onClick={handleToggleExpanded}
          >
            {isExpanded ? (
              <span className="flex gap-1 transition-all duration-100 group-hover:gap-0">
                {<SVG className="-mr-2.5 -rotate-90" />}
                {<SVG className="-ml-2.5 rotate-90" />}
              </span>
            ) : (
              <span className="flex gap-0 transition-all duration-100 group-hover:gap-1">
                {<SVG className="-mr-2.5 rotate-90" />}
                {<SVG className="-ml-2.5 -rotate-90" />}
              </span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="-mb-1.5 flex items-center justify-between space-x-2 font-semibold tracking-wide">
          <span>{isExpanded ? "Shrink" : "Expand"}</span>
          <kbd className="ml-2 rounded border bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
            Ctrl+.
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ExpandOrShrink;
