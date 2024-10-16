"use client";
import Highlight from "./typography/Highlight";
import ContestsTable from "@/components/ContestsTable";
import { ContestType } from "@/lib/types";
import useLocalStorage from "@/hooks/useLocalStorage";

const CompressedContestTable = ({
  contestData,
}: {
  contestData: ContestType[];
}) => {
  const [perPage, setPerPage] = useLocalStorage("compressed-per-page", "5");

  return (
    <div className="mx-auto max-w-screen-md px-1 pb-10">
      <div className="my-5 rounded-3xl bg-muted/30 pb-2">
        <header className="mb-6 pb-2 pt-10 text-center font-heading text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Take a<Highlight>Glance</Highlight>
        </header>

        <p className="mx-auto mb-10 max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
          We gathered everything in one place,{" "}
          <span className="font-semibold">so you don&apos;t have to!</span>
        </p>
      </div>
      <section className="relative">
        <ContestsTable
          compressed={true}
          contestData={contestData}
          perPage={parseInt(perPage)}
          setPerPage={setPerPage}
        />
      </section>
    </div>
  );
};

export default CompressedContestTable;
