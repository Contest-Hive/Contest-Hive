import { getAllContestData } from "@/lib/helpers/server";
import FocusedPage from "./components/FocusedPage";


const Focused = async () => {
  const contests = await getAllContestData();

  return <FocusedPage contestData={contests} />;
};

export default Focused;
