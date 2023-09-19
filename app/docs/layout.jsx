import SideBar from "@/components/docs/SideBar";

const title = "Docs | Contest Hive";
const description =
  "Documentation for Contest Hive, a web app that shows upcoming contests from various platforms.";
const keywords =
  "contest, contest hive, contest hive docs, contest api docs, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  favicon: "favicon.svg",
  openGraph: {
    title: title,
    description: description,
  },
};

const layout = ({ children }) => {
  return (
    <main>
      <SideBar />
      <div className="p-4 md:ml-64">{children}</div>
    </main>
  );
};

export default layout;
