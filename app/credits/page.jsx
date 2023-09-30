import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ME = {
  name: "Nusab Taha",
  role: "Programmer",
  image: "/assets/images/me.png",
  description:
    "And I am the one who put all the ideas together to make this website. 😀",
  links: {
    github: "https://github.com/Nusab19",
    telegram: "https://t.me/Nusab19",
    facebook: "https://facebook.com/NusabTaha",
  },
};

const TOOLS = [
  {
    name: "Flowbite",
    role: "Tailwind UI Kit",
    image: "/assets/images/flowbite.svg",
    description:
      "The most popular and open-source library of Tailwind CSS components.",
    links: {
      github: "https://github.com/themesberg/flowbite",
    },
    tool: true,
  },
  {
    name: "Tailblocks",
    role: "Tailwind UI Kit",
    image: "/assets/images/tailblock.png",
    description: "Ready-to-use Tailwind CSS blocks in your future projects.",
    links: {
      github: "https://github.com/mertJF/tailblocks",
    },
    tool: true,
  },
];

const PEOPLE = [
  {
    name: "Ahsan Habib Nayef",
    role: "Full-Stack Developer",
    image: "/assets/images/ahn.jpg",
    description: "AH Nayef is the one who gave the idea of Animations and Sorting.",
    links: {
      github: "https://github.com/ahnayef",
      telegram: "https://t.me/AHNayef",
      facebook: "https://www.facebook.com/ahsanhabibnayef",
    },
  },
  {
    name: "Safin Sarker",
    role: "Competitive Programmer",
    image: "/assets/images/safin.jpg",
    description:
      "Safin constantly gave me suggestions and ideas to improve the site.",
    links: {
      github: "https://github.com/safin01",
      telegram: "#",
      facebook: "https://facebook.com/safin.20050601",
    },
  },
];

const MakeCard = (list) => {
  return (
    <div className="mb-5 flex flex-col justify-between xl:flex-row">
      {list.map((person, index) => (
        <div
          className="mx-auto mt-5 w-fit rounded-md bg-gray-800 px-2 py-4 md:w-[500px]"
          key={index}
        >
          <span className="flex items-center">
            <Image
              src={person.image}
              width={100}
              height={100}
              alt={`${person.name}'s Profile Photo`}
              className="mr-5 h-[80px] w-[80px] rounded-full md:h-[100px] md:w-[100px]"
            />
            <section>
              <p className="text-lg font-semibold text-gray-100">
                {person.name}
              </p>
              <p className="text-base text-gray-400">{person.role}</p>
              <ul className="mt-2 flex gap-4">
                {!person.tool && (
                  <>
                    <li>
                      <Link
                        href={person.links.facebook || "#"}
                        className="text-[#4c6ebe] hover:text-[#4b81ff]"
                        title={person.name + "'s Facebook"}
                        target="_blank"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={person.links.telegram || "#"}
                        className="text-[#26A5E4] hover:text-[#3e8acc]"
                        title={person.name + "'s Telegram"}
                        target="_blank"
                      >
                        <svg
                          className="mt-[2px] h-[22px] w-[22px]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link
                    href={person.links.github || "#"}
                    className="text-gray-300 hover:text-gray-100"
                    title={person.name + "'s Github"}
                    target="_blank"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </section>
          </span>
          <p className="ml-2 mt-2 text-sm text-gray-400">
            {person.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const page = () => {
  return (
    <>
      <NavBar />
      <div className="mb-20 px-10 py-10 text-gray-300">
        <header className="text-4xl font-semibold text-white md:text-6xl">
          People Who Made This Possible
        </header>

        <div className="textLg mb-10 mt-10 md:text-xl">
          <p className="mt-5">
            These are the people who made this website possible. Without them,
            it would have been a mess.
          </p>
        </div>

        {MakeCard(PEOPLE)}
        {MakeCard([ME])}
        <div className="mt-12 border-t-4 border-gray-800"></div>
        <div className="mb-10 mt-10 text-center text-lg font-semibold md:text-xl">
          <p>These tools made my life easier.</p>
        </div>
        {MakeCard(TOOLS)}
      </div>
      <Footer />
    </>
  );
};

export default page;

const title = "Credits | Contest Hive";
const description = "Credits page of Contest Hive. Who made Contest Hive possible?";
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
