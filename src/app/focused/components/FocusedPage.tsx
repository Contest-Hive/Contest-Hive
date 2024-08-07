"use client";
import { useState } from "react";
import { ContestType } from "@/lib/types";
import ContestsTable from "@/components/ContestsTable";
import NavBar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

import useLocalStorage from "@/hooks/useLocalStorage";

const FocusedPage = ({ contestData }: { contestData: ContestType[] }) => {
  const [perPage, setPerPage] = useLocalStorage("focused-per-page", "10");
  return (
    <>
      <NavBar />
      <MaxWidthWrapper className="my-5 px-1 text-start">
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
