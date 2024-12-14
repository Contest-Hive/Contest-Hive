import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`mx-2 ml-4 whitespace-nowrap rounded-lg bg-pinkish py-1 pl-2 pr-2.5 text-secondary dark:bg-[#3a0968] dark:text-primary md:px-3 md:pr-4 md:pt-0 ${className}`}
    >
      {children}
    </span>
  );
};

export default Highlight;
 