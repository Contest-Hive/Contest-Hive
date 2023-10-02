import GetPlatformPage from "@/components/docs/GetPlatformPage";
import { notFound } from "next/navigation";

const platforms = [
  "all",
  "atcoder",
  "codechef",
  "codeforces",
  "codeforces-gym",
  "hackerearth",
  "hackerrank",
  "leetcode",
  "toph",
];

const page = ({ params }) => {
  const platformName = String(params.platformName)
    .toLowerCase()
    .replace("_", "-");
  if (!platforms.includes(platformName)) {
    return notFound();
  }
  return (
    <>
      <GetPlatformPage platformName={platformName} />
    </>
  );
};

export default page;

const pascalNames = {
  all: "All",
  atcoder: "Atcoder",
  codechef: "CodeChef",
  codeforces: "Codeforces",
  "codeforces-gym": "CodeForces GYM",
  codeforces_gym: "CodeForces GYM",
  hackerearth: "HackerEarth",
  hackerrank: "HackerRank",
  leetcode: "LeetCode",
  toph: "Toph",
};

export async function generateMetadata({ params }) {
  const platformName =
    pascalNames[String(params.platformName).toLowerCase().replace("_", "-")];

  return {
    title: `${platformName} | Contest Hive Docs`,
    description: `Documentation for Contest Hive's ${platformName} API.`,
    keywords: `contest hive docs, contest hive documentation, contest api docs, ${platformName} api docs, nusab taha, nusab19, toph leaderboard`,
    favicon: "/favicon.svg",
    openGraph: {
      title: `${platformName} | Contest Hive Docs`,
      description: `Documentation for Contest Hive's ${platformName} API.`,
      images: ["https://contest-hive.vercel.app/opengraph-image.png"],
    },

  };
}
