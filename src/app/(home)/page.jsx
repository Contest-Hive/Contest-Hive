import HomePage from "@/components/HomePage";
import Temp from "@/components/Temp";

import { getResponse as getAllContestResponse } from "../api/(main)/all/route";
import { getSecondsDifferencesFromNow, getStatsData } from "@/lib/helpers";

async function Home() {
  // increment page visits and get stats data
  let statsData = await getStatsData();

  const _contests = (await getAllContestResponse()).data;

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
