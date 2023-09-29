import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

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

const MakeBlock = (data) => {
  return (
    <div className="mt-10 flex">
      {data.map((person, index) => (
        <div
          key={index}
          className={`mx-auto flex w-1/3 rounded-md bg-gray-800 px-2 pb-2 pt-4 ${() => {
            const x = index + 1;
            if (x === 1) {
              return "mr-2";
            } else if (x === 2) {
              return "ml-2 block";
            } else if (x % 2 === 1) {
              return "mr-2";
            } else {
              return "ml-2 block";
            }
          }}`}
        >
          <span className="block">
            <Image
              src={person.image}
              width={120}
              height={120}
              alt={`${person.name}'s Profile Photo`}
              className="mr-5 h-[100px] w-[100px] rounded-full"
            />
            <span className="mt-2 flex justify-center">
              <Link href={person.links.github}>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mr-4 h-6 w-6 text-gray-400"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </Link>
              <Link href={person.links.telegram}>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-6 w-6 text-gray-400"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Link>
            </span>
          </span>
          <div className="ml-3">
            <p className="text-lg font-semibold text-gray-100">{person.name}</p>
            <p className="text-base text-gray-300">{person.role}</p>
            <p className="mt-2 text-sm text-gray-400">{person.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const PEOPLE = [
  {
    name: "Ah Nayef",
    role: "Full-Stack Developer",
    image: "/assets/images/ahn.jpg",
    description: "AHN is the one who gave the idea of Animations and Sorting.",
    links: {
      github: "#",
      telegram: "#",
    },
  },
  {
    name: "Safin Sarker",
    role: "Competitive Programmer",
    image: "/assets/images/safin.jpg",
    description:
      "Safin constantly gave me suggestions and ideas to improve the site.",
    links: {
      github: "#",
      telegram: "#",
    },
  },
];

const ME = {
  name: "Nusab Taha",
  role: "Programmer",
  image: "/assets/images/me.png",
  description: "And I am the one who put all the ideas together to make this website😀.",
  links: {
    github: "#",
    telegram: "#",
  },
};

const TOOLS = [
  {
    name: "Flowbite",
    role: "Tailwind UI Kit",
    image: "/assets/images/flowbite.svg",
    description: "Flowbite gave me UI components to start building quickly.",
    links: {
      github: "#",
      telegram: "#",
    },
  },
  {
    name: "Tailblock",
    role: "Tailwind UI Kit",
    image: "/assets/images/tailblock.png",
    description:
      "Tailblock's Features component came to use in Contest Hive.",
    links: {
      github: "#",
      telegram: "#",
    },
  },
];

const page = () => {
  return (
    <>
      <NavBar />
      <div className="mb-20 px-10 py-10 text-gray-300">
        <header className="text-4xl font-semibold text-white md:text-6xl">
          People Who Made This Possible
        </header>

        <div className="textLg mt-10 md:text-xl">
          <p className="mt-5">
            These are the people who made this website possible. Without them,
            it would have been a mess.
          </p>
        </div>

        {MakeBlock(PEOPLE)}
        {MakeBlock([ME])}
        {MakeBlock(TOOLS)}
      </div>
      <Footer />
    </>
  );
};

export default page;

const title = "Credits | Contest Hive";
const description = "Credits page of Contest Hive. Who made this possible?";
const keywords =
  "contest hive credits, contest hive, contest api credits, upcoming contest credits, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard";
const url = "https://contest-hive.vercel.app/credits";

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
