"use client";

const ControlPanel = ({ isFocusMode, setFocusMode }) => {
  return (
    <div className="fixed bottom-8 left-[50%] mx-auto -translate-x-[50%] select-none rounded-md bg-foreground px-4 py-2 text-secondary opacity-75 transition-all duration-200 hover:scale-110 hover:opacity-90">
      <span className="flex items-center justify-between gap-2">
        <svg
          onClick={() => setFocusMode(!isFocusMode)}
          width="1px"
          height="1px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer text-secondary transition-all duration-200 hover:rotate-45 hover:text-blue-50 active:scale-90 dark:hover:text-gray-800 md:h-7 md:w-7 xl:h-8 xl:w-8"
        >
          <path
            d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm0 24c-.5522847 0-1 .4477153-1 1v3c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-3c0-.5522847-.4477153-1-1-1zm0-13c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm0 2c1.6568542 0 3 1.3431458 3 3s-1.3431458 3-3 3-3-1.3431458-3-3 1.3431458-3 3-3zm-9 2h-3c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1zm21 0h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1zm-12-12c-.5522847 0-1 .44771525-1 1v3c0 .55228475.4477153 1 1 1s1-.44771525 1-1v-3c0-.55228475-.4477153-1-1-1z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>

        <svg
          width="1px"
          height="1px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer rounded-full bg-secondary stroke-primary  text-secondary transition-all duration-200 hover:text-blue-50 active:scale-90 dark:hover:text-gray-800 md:h-7 md:w-7 xl:h-8 xl:w-8"
        >
          <path
            d="M17 15L12 10L7 15"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default ControlPanel;
