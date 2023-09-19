// Vercel Analytics
// import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// Using `export const metadata` has some problems loading OpenGraph image
// So, using `meta` tags explicitly

const description =
  "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same";
const keywords =
  "contest, contest hive, contest api, upcoming contest, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard";
const title = "Contest Hive";
const url = "https://contest-hive.vercel.app/";
const image = "/assets/images/opengraph-image.png";

export const metadata = {
  title: "Acme",

};
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-200">{children}</body>
    </html>
  );
};

export default layout;
