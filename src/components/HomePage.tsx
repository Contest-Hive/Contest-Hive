import FocusedPage from "./FocusedPage";
import Stats from "./Stats";
import Contact from "./Contact";
import Footer from "./Footer";

import { getResponse as getAllContestResponse } from "../app/api/(main)/default";
import { getSecondsDifferencesFromNow } from "@/lib/helpers";
import { ContestDataType } from "@/lib/types";

const HomePage = async () => {
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
      <FocusedPage contestData={contestData} />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
