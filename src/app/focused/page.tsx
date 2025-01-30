import { getAllContestData } from "@/lib/helpers/server";
import FocusedPage from "./components/FocusedPage";

const Focused = async () => {
  const contests = await getAllContestData();

  return <FocusedPage contestData={contests} />;
};

export default Focused;

export const metadata = {
  title: "Focused Mode - Contest Hive",
  description:
    "With the focused mode, you can only focus on the contests and not the other data. Increase your productivity with Contest Hive. All upcoming competitive contests at one place.",
};
