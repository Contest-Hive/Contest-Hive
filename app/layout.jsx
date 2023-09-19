// Vercel Analytics
// import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";

const title = "Contest Hive";
const description =
  "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same";
const keywords =
  "contest, contest hive, contest api, upcoming contest, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard";
const url = "https://contest-hive.vercel.app/";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  favicon: "favicon.ico",
  openGraph: {
    title: title,
    description: description,
    url: url,
  },
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-200">{children}</body>
    </html>
  );
};

export default layout;
