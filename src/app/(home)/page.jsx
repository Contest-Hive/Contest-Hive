import HomePage from "@/components/HomePage";
import Temp from "@/components/Temp";

import { getStatsData, getSecondsDifferencesFromNow } from "@/lib/helpers";

const Home = async () => {
  const statsData = await getStatsData();
  const res = await fetch(`${process.env.ROOT_URL}/api/all`, {
    next: { revalidate: 60 * 3 }, // cache for 3 minutes
  });
  const _contests = (await res.json()).data;
  // sort contests by start time
  const contestData = Object.values(_contests).flatMap((contests) => contests);
  contestData.sort(
    (a, b) =>
      getSecondsDifferencesFromNow(a.startTime) -
      getSecondsDifferencesFromNow(b.startTime),
  );
  // remove contests that have already started
  const filteredContests = contestData
    .filter((contest) => getSecondsDifferencesFromNow(contest.startTime) > 1)
    .slice(0, 27);

  return (
    <>
      {/* <Temp /> */}
      <HomePage contestData={filteredContests} statsData={statsData} />
    </>
  );
};

export default Home;
