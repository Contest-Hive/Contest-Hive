import NavBar from "@/components/Navbar";
import HomePage from "@/components/HomePage";

import { getSecondsDifferencesFromNow } from "@/lib/utils";

const Home = async () => {
  const res = await fetch("https://contest-hive.vercel.app/api/all");
  const _contests = (await res.json()).data;
  // sort contests by start time
  const contestData = Object.values(_contests).flatMap((contests) => contests);
  contestData.sort(
    (a, b) =>
      getSecondsDifferencesFromNow(a.startTime) -
      getSecondsDifferencesFromNow(b.startTime),
  );

  return (
    <>
      <NavBar />
      <HomePage contestData={contestData} />
    </>
  );
};

export default Home;
