import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Heading = ({
  children,
  className = "",
  level = 1,
}: {
  children: ReactNode;
  className: string;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}) => {
  return (
    <header
      className={cn(
        "mb-5 w-fit scroll-m-20 border-b pb-2 pr-1 text-2xl font-bold tracking-tighter first:mt-0 md:text-3xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </header>
  );
};

export default Heading;
