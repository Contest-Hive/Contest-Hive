import { getAllContestData, getLastUpdatedTime } from "@/lib/helpers/server";
import CompressedContestTable from "./CompressedContestTable";

export const revalidate = 60 * 5; /**
 * Retrieves contest data and the last updated timestamp, then renders a contest table.
 *
 * This asynchronous function fetches contest data and its last updated time via helper functions,
 * returning a CompressedContestTable component configured with the retrieved information.
 *
 * @returns A JSX element displaying contest information along with the last updated timestamp.
 */

async function ContestSection() {
  const contests = await getAllContestData();
  const lastUpdated = await getLastUpdatedTime();

  // return <pre>
  //   {JSON.stringify(contests, null, 2)}
  // </pre>
  return (
    <CompressedContestTable contestData={contests} lastUpdated={lastUpdated} />
  );
}

export default ContestSection;
