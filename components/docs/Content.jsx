import Link from "next/link";

const platforms = [
  "atcoder",
  "codechef",
  "codeforces",
  "hackerearth",
  "hackerrank",
  "leetcode",
  "toph",
];

const Content = () => {
  return (
    <>
      <div id="#introduction" className="container mx-auto my-6 px-5 py-6">
        <header className="title-font text-3xl font-bold text-white sm:text-4xl">
          Introduction
        </header>
        <p className="mt-5 text-gray-300">
          Contest Hive has a RESTful API that allows you to access upcoming
          contest information from 7 different competitive programming
          platforms.
          <br />
          <br />
          The API is free to use and requires no authentication.
        </p>

        <Link
          href="#request-format"
          className="group relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-800 px-5 py-3 font-mono font-medium tracking-tighter text-white ring-2 ring-slate-800 transition-all duration-200 hover:bg-opacity-80"
        >
          <span className="relative">Get Started</span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="mt-[1 px] ml-3 h-6 w-6 group-hover:ml-4"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
        </Link>
      </div>

      {/* Endpoints */}

      <div className="container mx-auto my-5 px-5 py-6" id="endpoints">
        <Link
          href="#endpoints"
          className="title-font text-2xl font-bold sm:text-3xl"
        >
          Endpoints
        </Link>
        <p className="mt-5 text-gray-300">
          The base url of the API is{" "}
          <Link
            href="/api/"
            className="rounded-lg bg-slate-800 px-2 py-1 font-mono text-gray-300 transition duration-200 hover:bg-slate-900 hover:text-gray-100"
          >
            contest-hive.vercel.app/api/
          </Link>
        </p>
        <p className="mt-5 text-gray-300">
          The API supports the following endpoints:
        </p>

        <div className="mt-5">
          <div className="flex flex-col sm:flex-row sm:space-x-5">
            <div className="flex flex-col space-y-2">
              <div>
                <Link
                  href={`/docs/all`}
                  className="rounded-lg bg-slate-800 px-2 py-0.5 font-mono text-gray-300 transition duration-200 hover:bg-slate-900 hover:text-gray-100"
                >
                  /all
                </Link>
              </div>
              {platforms.map((platform) => (
                <div key={platform}>
                  <Link
                    href={`/docs/${platform}`}
                    className="rounded-lg bg-slate-800 px-2 py-0.5 font-mono text-gray-300 transition duration-200 hover:bg-slate-900 hover:text-gray-100"
                  >
                    /{platform}
                  </Link>
                  <span className="ml-2 mr-2">or</span>
                  <Link
                    href={`/docs/${platform}`}
                    className="rounded-lg bg-slate-800 px-2 py-0.5 font-mono text-gray-300 transition duration-200 hover:bg-slate-900 hover:text-gray-100"
                  >
                    /{platforms.indexOf(platform) + 1}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Requests Format */}
      <div className="container mx-auto my-5 px-5 py-6" id="request-format">
        <Link
          href="#request-format"
          className="title-font text-2xl font-bold sm:text-3xl"
        >
          Request Format
        </Link>
        <p className="mt-5 text-gray-300">
          Make a <b>GET</b> request to the API endpoint of your choice. The
          response will be a JSON object containing the upcoming contests.
        </p>

        <p className="title-font text-1xl mt-5 font-bold sm:text-2xl">Format</p>

        <p className="mt-3">
          <span className="mb-4 block font-mono text-gray-300">
            contest-hive.vercel.app/api/
            <span className="text-red-400">&lt;platform-name&gt;</span>
          </span>
          Replace{" "}
          <span className="font-mono text-red-400">&lt;platform-name&gt;</span>{" "}
          with the name of the platform you want
        </p>
      </div>
      {/*  */}
    </>
  );
};

export default Content;
