// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import Head from "next/head";


export const metadata = {
  title: "Contest Hive",
  description:
    "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same",
  keywords:
    "contest, contest hive, contest api, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard",

  favicon: "favicon.ico",
  openGraph: {
    title: "Contest Hive",
    description:
      "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same",
    image: "/assets/images/contestHive.png",
    url: "https://contest-hive.vercel.app/",
  },

  twitterCard: "Contest Hive - Twitter",
  twitterTitle: "Contest Hive",
  twitterDescription:
    "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same",
  twitterImage: "/assets/images/contestHive.png",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </Head>

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
