import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

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
  return (
    <Button variant="outline" className="group max-w-12" onClick={
        handleToggleExpanded
    } title="Expand or Shrink">
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
  );
};

export default ExpandOrShrink;
