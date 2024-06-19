import HomePage from "@/components/HomePage";
import Temp from "@/components/Temp";
import { getResponse as getAllContestResponse } from "../api/(main)/default";
import { getSecondsDifferencesFromNow, getStatsData } from "@/lib/helpers";
import { ContestDataType } from "@/lib/types";

export const fetchCache = "default-no-store";

export default async function Home() {
  const statsData = await getStatsData("page");
  // Fetch contests data
  const _contests: ContestDataType = (await getAllContestResponse("all")).data;

  // Process contests data
  const contestData = Object.values(_contests).flatMap((contests) => contests);
  contestData.sort(
    (a, b) =>
      getSecondsDifferencesFromNow(a.startTime) -
      getSecondsDifferencesFromNow(b.startTime),
  );

  // Filter contests that have already started
  const filteredContests = contestData.filter(
    (contest) => getSecondsDifferencesFromNow(contest.startTime) > 10,
  );
  return (
    <>
      <HomePage contestData={filteredContests} statsData={statsData} />
    </>
  );
}
