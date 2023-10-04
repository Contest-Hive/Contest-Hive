import Link from "next/link";
import { use } from "react";
import { simplifyNumber } from "@/components/helpers/KontestsHelper";

async function getStarCount() {
  const res = await fetch(
    "https://api.github.com/repos/Contest-Hive/Contest-Hive",
    {
      next: {
        revalidate: 30,
      },
    },
  );
  const json = await res.json();
  return json.stargazers_count;
}

const Arrow = (
  <svg
    className="h-6 w-6 text-gray-800"
    viewBox="0 0 13 21"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 21L0.726497 11H12.2735L6.5 21ZM5.5 1C5.5 0.447716 5.94772 0 6.5 0C7.05228 0 7.5 0.447716 7.5 1H5.5ZM5.5 12L5.5 1H7.5V12H5.5Z"
      fill="black"
      fill-opacity="0.31"
    />
  </svg>
);

const StarInGithub = () => {
  const starCount = simplifyNumber(use(getStarCount()));

  return (
    <section className="mx-auto w-11/12 max-w-screen-md text-center md:w-2/3 mt-20">
      <header className="mb-7 text-4xl font-semibold md:text-6xl">
        We Need Your Help
      </header>
      <p className="text-base font-normal md:text-lg">
        Contest Hive is an open source project. We need <b>you</b> to grow
        this project. Help us by starring this project in Github.
      </p>
      <div className="mx-auto my-32 flex w-fit justify-center text-gray-700 hover:text-sky-500">
        {/* 90deg */}
        <div className="arrow-animate absolute mt-2 flex rotate-90 justify-between">
          <svg
            className="h-6 w-6 -rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>

          <svg
            className="h-6 w-6 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
        </div>

        {/* 180deg */}
        <div className="arrow-animate absolute mt-2 flex justify-between">
          <svg
            className="h-6 w-6 -rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>

          <svg
            className="h-6 w-6 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
        </div>

        {/* 45deg */}
        <div className="arrow-animate absolute mt-2 flex rotate-45 justify-between">
          <svg
            className="h-6 w-6 -rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>

          <svg
            className="h-6 w-6 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
        </div>

        {/* -45deg */}
        <div className="arrow-animate absolute mt-2 flex -rotate-45 justify-between">
          <svg
            className="h-6 w-6 -rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>

          <svg
            className="h-6 w-6 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
        </div>

        {/* Link */}
        <Link
          href="https://github.com/Contest-Hive/Contest-Hive"
          className="flex items-center justify-center mb-20"
        >
          <span className="absolute mt-10 flex h-10 w-32 items-center justify-center rounded bg-gray-800 bg-opacity-70 font-semibold text-gray-200 transition-all duration-100 hover:h-12 hover:w-36 hover:rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M11.8197 6.04369C11.8924 5.8925 12.1076 5.8925 12.1803 6.04369L13.9776 9.78496C14.0068 9.84564 14.0645 9.88759 14.1312 9.89657L18.2448 10.4498C18.411 10.4722 18.4776 10.6769 18.3562 10.7927L15.3535 13.6582C15.3048 13.7047 15.2827 13.7726 15.2948 13.8388L16.0398 17.922C16.0699 18.087 15.8957 18.2136 15.7481 18.1339L12 16.1124L8.25192 18.1339C8.10429 18.2136 7.93012 18.087 7.96023 17.922L8.7052 13.8388C8.71729 13.7726 8.69523 13.7047 8.64653 13.6582L5.64378 10.7927C5.52244 10.6769 5.58896 10.4722 5.7552 10.4498L9.86876 9.89657C9.93549 9.88759 9.99322 9.84564 10.0224 9.78496L11.8197 6.04369Z"
              ></path>
            </svg>
            <p>
              Star{" "}
              <span className="rounded-md bg-gray-700 bg-opacity-80 py-0.5 pl-2 pr-1">
                {starCount}+
              </span>
            </p>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default StarInGithub;
