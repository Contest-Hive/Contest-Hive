import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

const PAGE_SPEED = {
  ContestHive:
    "https://pagespeed.web.dev/analysis/https-contest-hive-vercel-app/rpcslk4tb1",
  StopStalk:
    "https://pagespeed.web.dev/analysis/https-www-stopstalk-com-contests/7ggfeyzkq1",
  Kontests: "https://pagespeed.web.dev/analysis/https-kontests-net/ng0dnqivsn",
};

const MARK = (
  <svg
    className="h-3 w-3 text-green-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5.917 5.724 10.5 15 1.5"
    />
  </svg>
);

const CROSS = (
  <svg
    className="h-3 w-3 text-red-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
);

const EXTERNAL = (
  <svg
    className="mb-2 ml-2 inline-block h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
    />
  </svg>
);

const MakeLink = (text, link, target) => {
  if (!target) target = "_self";
  return (
    <Link
      href={link}
      className="roundedLg mx-1 rounded-lg px-1 py-1 font-bold text-sky-500 transition-all duration-200 hover:bg-gray-800 hover:bg-opacity-60 hover:text-emerald-500"
      target={target}
    >
      <span>
        {text}
        {target === "_blank" ? EXTERNAL : ""}
      </span>
    </Link>
  );
};

const page = () => {
  return (
    <>
      <NavBar />
      <div className="mb-20 px-10 py-10 text-gray-300">
        <header className="text-4xl font-semibold text-white md:text-6xl">
          About Us
        </header>

        <div className="textLg mt-10 md:text-xl">
          <p>
            The idea of <b className="text-gray-100">Contest Hive</b> came from
            facing difficulties in finding upcoming contests from different
            platforms. We had to visit each platform to find out the upcoming
            contests.
            <br />I asked myself,{" "}
            <q className="font-semibold text-gray-100">
              Should the process be this hard?
            </q>
            . The answer was <q className="font-semibold text-gray-100">No</q>.
            <br />
            <br />
            It all started with the idea of a simple hobby website that would
            show the upcoming contests from{" "}
            <b className="text-gray-100">CodeForces</b>. Then gradually over
            time, 6 more platforms were added. Now, it shows contests from:
          </p>
          <ul className="mt-2 list-inside list-disc pl-7 font-mono">
            <li className="text-gray-100">AtCoder</li>
            <li className="text-gray-100">CodeChef</li>
            <li className="text-gray-100">CodeForces</li>
            <li className="text-gray-100">HackerEarth</li>
            <li className="text-gray-100">HackerRank</li>
            <li className="text-gray-100">LeetCode</li>
            <li className="text-gray-100">Toph</li>
          </ul>

          <p className="mt-5">
            From the beginning, the goal was to make the website as simple as
            possible. I shared this site with my friends and some senior coders.
            They liked the idea and suggested me to add/modify some features.
            Lots of sleepless nights and hard work later, we are here.
            <br />
            <br />
            The ones who helped me in this journey are listed in the
            {MakeLink("Credits", "/credits")}
            Page.
            <br />
            Now, You just have to visit one place to manage all the upcoming
            contests from different platforms. Isn't that cool?
          </p>
          <p className="mt-5">
            We are still in the early stages of development. We will be adding
            more features in the future. If you have any suggestions, please
            feel free to
            {MakeLink("Contact Us", "/#contact-us")}
          </p>
        </div>

        {/* How Are We Different */}
        <div className="textLg mt-20 md:text-xl">
          <header className="text-4xl text-white md:text-6xl">
            How are We Different?
          </header>
          <p className="mt-5">
            <span className="font-white font-semibold">
              It really depends on what you are looking for.
            </span>
            <br />
            <b className="text-gray-100">Contest Hive</b> focuses on managing
            everything related to future contests while{" "}
            <b className="text-gray-100">StopStalk</b> provides a lot of other
            features.
            <br />
            <br />
            The website those are currently available for finding upcoming
            contests are:
          </p>
          <ul className="mt-2 list-inside list-disc pl-7 font-mono">
            <li className="text-gray-100">
              {MakeLink(
                "StopStalk",
                "https://www.stopstalk.com/contests",
                "_blank",
              )}
            </li>
            <li className="text-gray-100">
              {MakeLink("Kontests", "https://kontests.net/", "_blank")}
            </li>
          </ul>

          {/* Table */}

          <section className="mt-10 overflow-x-auto">
            <div className="min-w-max overflow-hidden">
              <div className="roundedLg grid grid-cols-4 gap-x-16 bg-gray-800 p-4 text-sm font-medium text-gray-100">
                <div>Feature</div>
                <div>Contest Hive</div>
                <div>StopStalk</div>
                <div>Kontests</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">Shows All Contests</div>
                <div className="ml-1 mt-1 font-bold">{MARK}</div>
                <div className="ml-1 mt-1 font-bold">{MARK}</div>
                <div className="ml-1 mt-1 font-bold">{MARK}</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">
                  Data Updates{" "}
                  <sup className="text-xs text-red-400">
                    <Link href="#1">[1]</Link>
                  </sup>
                </div>
                <div className="ml-1 mt-1 font-bold">~5 min</div>
                <div className="ml-1 mt-1 font-bold">~1 hour</div>
                <div className="ml-1 mt-1 font-bold">~24 hours</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">Open Source</div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{MARK}</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">API Support</div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
                <div className="ml-1 mt-1">{MARK}</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">
                  Best Performance{" "}
                  <sup className="text-xs text-red-400">
                    <Link href="#2">[2]</Link>
                  </sup>
                </div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">
                  Shows Local Time{" "}
                  <sup className="text-xs text-red-400">
                    <Link href="#3">[3]</Link>
                  </sup>
                </div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
                <div className="ml-1 mt-1">{MARK}</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">Sorting Option</div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">Google Calendar Event</div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-700 px-4 py-5 text-sm">
                <div className="text-gray-400">Multi Purpose</div>
                <div className="ml-1 mt-1">{CROSS}</div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
              </div>
            </div>
          </section>
          {/* KeyNotes */}
          <section className="mt-10 text-sm">
            <p className="mb-5 text-4xl font-semibold text-gray-200">
              KeyNotes
            </p>
            {/* 1 */}
            <div className="mb-10">
              <p
                className="mb-3 border-b-2 border-gray-700 text-2xl font-semibold text-gray-200"
                id="1"
              >
                <span className="inline-block text-gray-400">#[1]</span> Data
                Update Time
              </p>
              <p className="text-base text-gray-300 md:text-lg">
                The interval of time after which the data fetched and updated.{" "}
                <br />
              </p>
              <ul className="mt-2 list-inside list-disc pl-7 font-mono text-lg md:text-xl">
                <li className="text-gray-100">
                  Contest Hive updates the data every 5 minutes.
                </li>
                <li className="text-gray-100">
                  StopStalk updates the data every 1 hour.{" "}
                </li>
                <li className="text-gray-100">
                  Kontests updates the data every 24 hours.
                </li>
              </ul>
            </div>
            {/* 2 */}
            <div className="mb-10">
              <p
                className="mb-3 border-b-2 border-gray-700 text-2xl font-semibold text-gray-200"
                id="2"
              >
                <span className="inline-block text-gray-400">#[2]</span> Best
                Performance
              </p>
              <p className="text-base text-gray-300 md:text-lg">
                The website that loads the fastest. It was measured using
                {MakeLink(
                  "PageSpeed Insights",
                  "https://pagespeed.web.dev/",
                  "_blank",
                )}
                by Google.
                <br />
              </p>
              <ul className="mt-2 list-inside list-disc pl-7 font-mono text-lg md:text-xl">
                <li className="text-gray-100">
                  {MakeLink(
                    "Contest Hive scored 100 in Mobile and 99 in Desktop",
                    PAGE_SPEED.ContestHive,
                    "_blank",
                  )}
                </li>
                <li className="text-gray-100">
                  {MakeLink(
                    "StopStalk scored 61 in Mobile and 97 in Desktop",
                    PAGE_SPEED.StopStalk,
                    "_blank",
                  )}
                </li>
                <li className="text-gray-100">
                  {MakeLink(
                    "Kontests scored 73 in Mobile and 82 in Desktop",
                    PAGE_SPEED.Kontests,
                    "_blank",
                  )}
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div className="mb-10">
              <p
                className="mb-3 border-b-2 border-gray-700 text-2xl font-semibold text-gray-200"
                id="3"
              >
                <span className="inline-block text-gray-400">#[3]</span> Shows
                Local Time
              </p>
              <p className="text-base text-gray-300 md:text-lg">
                Whether the website shows the local time of the contest start
                time or not.
                <br />
              </p>
            </div>

            {/* -------- */}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

const title = "About | Contest Hive";
const description =
  "About Page of Contest Hive. How are we different from other websites?";
const keywords =
  "contest hive about, contest hive, contest api about, upcoming contest about, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard";
const url = "https://contest-hive.vercel.app/about";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    url: url,
  },
};
