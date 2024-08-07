"use client";
import { useState } from "react";
import { ContestType } from "@/lib/types";
import ContestsTable from "@/components/ContestsTable";
import NavBar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

const FocusedPage = ({ contestData }: { contestData: ContestType[] }) => {
  const [perPage, setPerPage] = useState("10"); // TODO: read from local storage
  return (
    <>
      <NavBar />
      <MaxWidthWrapper className="text-start my-5 px-1">
        <ContestsTable
          contestData={contestData}
          perPage={parseInt(perPage)}
          setPerPage={setPerPage}
        />
      </MaxWidthWrapper>
    </>
  );
};

export default FocusedPage;
