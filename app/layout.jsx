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
        <title>Contest Hive</title>
        <meta
          name="description"
          content="Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same"
        />
        <meta property="og:url" content="https://contest-hive.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contest Hive" />
        <meta
          property="og:description"
          content="Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same"
        />
        <meta
          property="og:image"
          content="https://contest-hive.vercel.app/assets/images/contestHive.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="contest-hive.vercel.app" />
        <meta
          property="twitter:url"
          content="https://contest-hive.vercel.app/"
        />
        <meta name="twitter:title" content="Contest Hive" />
        <meta
          name="twitter:description"
          content="Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same"
        />
        <meta
          name="twitter:image"
          content="https://contest-hive.vercel.app/assets/images/contestHive.png"
        />
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
