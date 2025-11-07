import { getAllContestData, getLastUpdatedTime } from "@/lib/helpers/server";
import FocusedPage from "./components/FocusedPage";

export const revalidate = 60 * 5; // 5 minutes

const Focused = async () => {
  const contests = await getAllContestData();
  const lastUpdated = await getLastUpdatedTime();

  return <FocusedPage contestData={contests} lastUpdated={lastUpdated} />;
};

export default Focused;

export const metadata = {
  title: "Focused Mode - Upcoming Contests in One Place | Contest Hive",
  description:
    "With the focused mode, you can only focus on the upcoming contests and not the other data. Increase your productivity with Contest Hive. All upcoming competitive contests at one place.",
};
