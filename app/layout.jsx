// Vercel Analytics
// import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const metadata = {
  title: "Contest Hive",
  description:
    "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same",
  keywords:
    "contest, contest hive, contest api, upcoming contest, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard",

  favicon: "favicon.ico",
  openGraph: {
    title: "Contest Hive",
    description:
      "Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same",
    image: "/assets/images/opengraph-image.png",
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
      <head>
        <title>Contest Hive</title>
        <meta
          name="description"
          content="Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same"
        />
        <meta
          name="keywords"
          content="contest, contest hive, contest api, upcoming contest, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard"
        />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:title" content="Contest Hive" />
        <meta
          property="og:description"
          content="Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://contest-hive.vercel.app/" />
        <meta
          property="og:image"
          content="/assets/images/opengraph-image.png"
        />
        <meta name="twitter:card" content="Contest Hive - Twitter" />
        <meta name="twitter:title" content="Contest Hive" />
        <meta
          name="twitter:description"
          content="Contest Hive provides contest information from various competitive programming platforms. It also provides a REST API for the same"
        />
        <meta name="twitter:image" content="/assets/images/contestHive.png" />
      </head>
      <body className="bg-gray-950 text-gray-200">{children}</body>
    </html>
  );
};

export default layout;
