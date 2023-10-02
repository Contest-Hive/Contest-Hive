import SideBar from "@/components/docs/SideBar";

const layout = ({ children }) => {
  return (
    <main>
      <SideBar />
      <div className="p-4 md:ml-64">{children}</div>
    </main>
  );
};

export default layout;


const title = "Docs | Contest Hive";
const description =
  "Documentation for Contest Hive, a web app that shows upcoming contests from various platforms.";
const keywords =
  "contest docs, contest hive docs, contest hive documentation, contest api docs, codeforces api docs, toph api docs, kontests api docs, hackerearth api docs, hackerrank api docs, codechef api docs, atcoder api docs, leetcode api docs, nusab taha, nusab19, toph leaderboard";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  favicon: "favicon.svg",
  openGraph: {
    title: title,
    description: description,
    url: "https://contest-hive.vercel.app/docs",
    images: ["https://contest-hive.vercel.app/opengraph-image.png"],
  },
};