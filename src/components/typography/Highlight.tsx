import React from "react";

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="mx-2 rounded-lg bg-pinkish py-1 pl-2 pr-2.5 text-secondary dark:bg-blueish dark:text-primary md:px-3 md:pr-4 md:pt-0">
      {children}
    </span>
  );
};

export default Highlight;
