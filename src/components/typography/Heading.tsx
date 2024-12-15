import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Define a more precise type for heading levels
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// More nuanced size mappings
const levelSizes = {
  1: "text-4xl md:text-5xl lg:text-6xl pt-10 pb-5",
  2: "text-3xl md:text-4xl lg:text-5xl pt-8 pb-4",
  3: "text-2xl md:text-3xl lg:text-4xl pt-6 pb-3",
  4: "text-xl md:text-2xl lg:text-3xl pt-5 pb-2",
  5: "text-lg md:text-xl lg:text-2xl pt-4 pb-1",
  6: "text-base md:text-lg lg:text-xl pt-3 pb-0.5",
};

interface HeadingProps {
  children: ReactNode;
  className?: string;
  level?: HeadingLevel;
  as?: React.ElementType;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  level = 1,
  as: Component = `h${level}` as React.ElementType,
}) => {
  return (
    <Component
      className={cn(
        "mx-auto mb-4 text-center font-heading font-bold leading-tight tracking-tighter",
        levelSizes[level],
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
