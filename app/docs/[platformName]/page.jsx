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
