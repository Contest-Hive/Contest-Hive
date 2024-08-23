import { getAllContestData } from "@/lib/helpers/server";
import CompressedContestTable from "./CompressedContestTable";

async function ContestSection() {
  const contests = await getAllContestData();
  return <CompressedContestTable contestData={contests} />;
}

export default ContestSection;
