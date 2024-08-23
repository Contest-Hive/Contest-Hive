import { cn } from "@/lib/utils";

const defaultClassName =
  "mx-10 h-10 w-10 rounded-md p-2 dark:bg-primary md:mx-14 md:h-12 md:w-12";

const CodeforcesLogo = (className: string = "") => {
  return (
    <div className={cn(defaultClassName, className)}>
      <svg
        width="30"
        height="22"
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="22.25"
          y="8.45834"
          width="7.25"
          height="13.2917"
          rx="1"
          fill="#B82026"
        />
        <rect
          x="0.5"
          y="4.83336"
          width="7.25"
          height="16.9167"
          rx="1"
          fill="#F8CD54"
        />
        <rect x="11.375" width="7.25" height="21.75" rx="1" fill="#1484C5" />
      </svg>
    </div>
  );
};

export default CodeforcesLogo;
