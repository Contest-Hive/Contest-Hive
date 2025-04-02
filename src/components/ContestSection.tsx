import { getAllContestData, getLastUpdatedTime } from "@/lib/helpers/server";
import CompressedContestTable from "./CompressedContestTable";

export const revalidate = 60 * 5; // 5 minutes

async function ContestSection() {
  const contests = await getAllContestData();
  const lastUpdated = await getLastUpdatedTime();
  return (
    <CompressedContestTable contestData={contests} lastUpdated={lastUpdated} />
  );
}

export default ContestSection;
