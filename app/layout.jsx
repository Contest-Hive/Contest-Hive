// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Contest Hive",
  description:
    "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same",
  keywords:
    "contest, contest hive, contest api, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard",
  // viewport: "width=device-width, initial-scale=1.0",
  favicon: "favicon.ico",
  ogTitle: "Contest Hive",
  ogDescription:
    "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same",
  ogImage: "/assets/images/contestHive.png",
  ogUrl: "https://contest-hive.vercel.app/",
  twitterCard: "Contest Hive - Twitter",
  twitterTitle: "Contest Hive",
  twitterDescription:
    "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same",
  twitterImage: "/assets/images/contestHive.png",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-200">
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default layout;
