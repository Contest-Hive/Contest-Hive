import { getAllContestData } from "@/lib/helpers/server";
import CompressedContestTable from "./CompressedContestTable";
import { sleep } from "@/lib/utils";

async function ContestSection() {
  const contests = await getAllContestData();
  return <CompressedContestTable contestData={contests} />;
}

export default ContestSection;
