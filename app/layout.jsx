import "@/app/globals.css";
import UnderMaintenance from "@/components/UnderUnderMaintenance";
import GenerateRssFeed from "@/components/GenerateRssFeed";

// Change When Maintaining
const IS_MAINTENANCE = false;

const layout = ({ children }) => {
  GenerateRssFeed().then(() => console.log("RSS Feed Generated"));

  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-200">
        <main>{IS_MAINTENANCE ? <UnderMaintenance /> : children}</main>
      </body>
    </html>
  );
};

export default layout;

const title = "Contest Hive";
const description =
  "Contest Hive provides all the upcoming contests in one place. You will never miss a contest again. With the help of our API, you can integrate it with your website or app.";
const keywords =
  "contest, contest hive, contest api, upcoming contest, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard";
const url = "https://contest-hive.vercel.app/";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: ["https://contest-hive.vercel.app/opengraph-image.png"],
  },
};
