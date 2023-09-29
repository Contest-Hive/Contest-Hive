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
  const profiles = [
    {
      name: "John Doe",
      profession: "Web Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/ahn.jpg",
    },
    {
      name: "Jane Smith",
      profession: "UI/UX Designer",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/images/ahn.jpg",
    },
    {
      name: "Bob Johnson",
      profession: "Backend Developer",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/assets/images/ahn.jpg",
    },
    {
      name: "Alice Williams",
      profession: "Frontend Developer",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/assets/images/ahn.jpg",
    },
  ];

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

        <div className="mt-10 grid grid-cols-2 gap-4">
          {profiles.map((profile, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-gray-800">
              <div className="flex h-40 items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  className="rounded-full"
                  src={profile.image}
                  alt={profile.name}
                />
              </div>
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{profile.name}</div>
                <p className="text-base text-gray-300">{profile.profession}</p>
                <p className="mt-2 text-base text-gray-400">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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
