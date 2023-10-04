import "@/others/highlight.css"; // css for code highlight
import getCodeExamples from "@/components/docs/CodeExamples.js";
import {
  properties,
  GetExampleResponse,
  pascalNames,
} from "@/components/docs/DocsHelper";
import GetPlatformPage from "@/components/docs/GetPlatformPage";

import { notFound } from "next/navigation"; // 404 page

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

  const codeExamples = getCodeExamples(platformName);
  const exampleResponse = GetExampleResponse(platformName);
  return (
    <>
      <GetPlatformPage
        platformName={platformName} // lower case platform name
        codeExamples={codeExamples}
        exampleResponse={exampleResponse}
        properties={properties}
      />
    </>
  );
};

export default page;

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
