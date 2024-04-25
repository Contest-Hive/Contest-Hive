import HomePage from "@/components/HomePage";

import { getSecondsDifferencesFromNow } from "@/lib/utils";

const Home = async () => {
  const res = await fetch("https://contest-hive.vercel.app/api/all", {
    next: 60 * 3333, // cache for 3 minutes
    // TODO: change it to 3 minutes
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
  const filteredContests = contestData.filter(
    (contest) => getSecondsDifferencesFromNow(contest.startTime) > 1,
  ).slice(0, 27);

  return (
    <>
      <HomePage contestData={filteredContests} />
    </>
  );
};

export default Home;
