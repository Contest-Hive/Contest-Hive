import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

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

const MakeLink = (text, link, target) => {
  if (!target) target = "_self";
  return (
    <Link
      href={link}
      className="roundedLg mx-1 px-1 py-1 font-bold text-sky-500 transition-all duration-200 hover:bg-gray-800 hover:bg-opacity-60 hover:text-emerald-500"
      target={target}
    >
      {text}
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
            Lots of unslept nights and hard work later, we are here.
            <br />
            <br />
            The ones who helped me in this journey are listed in the
            {MakeLink("Credits", "/credits")}
            Page.
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
            <span className="font-semibold font-white">It really depends on what you are looking for.</span>
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
              {MakeLink("StopStalk", "https://www.stopstalk.com/contests")}
            </li>
            <li className="text-gray-100">
              {MakeLink("Kontests", "https://kontests.net/")}
            </li>
          </ul>

          {/* Table */}

          <div id="detailed-pricing" className="mt-10 overflow-x-auto">
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
                    <Link href="#1">every [1]</Link>
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
                <div className="text-gray-400">Best Performance</div>
                <div className="ml-1 mt-1">{MARK}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
                <div className="ml-1 mt-1">{CROSS}</div>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
