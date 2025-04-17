"use client";
import { useEffect, useState } from "react";
import { ContestType } from "@/lib/types";
import ContestsTable from "@/components/ContestsTable";
import NavBar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

import useLocalStorage from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";

const FocusedPage = ({
  contestData,
  lastUpdated,
}: {
  contestData: ContestType[];
  lastUpdated: string;
}) => {
  const [perPage, setPerPage] = useLocalStorage("focused-per-page", "10");
  const [isExpanded, setIsExpanded] = useLocalStorage("expanded", "false");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    /*
    If I just do,
      `setReady(true);`
    
    then it would still change the width without the transition animation.
    but if I do it in the timeout, it changes the state after the page
        is fully loaded.
    */
    setTimeout(() => {
      setReady(true);
    }, 0);
  }, []);

  const handleToggleExpanded = () => {
    setIsExpanded(!JSON.parse(isExpanded));
  };

  const wrapperClass = cn(
    "my-5 px-1 text-start transition-all duration-300",
    ready
      ? JSON.parse(isExpanded)
        ? "max-w-screen-2xl"
        : "max-w-screen-lg"
      : "max-w-screen-lg", // Default shrunk state before ready
    // ik, the logic is kinda messy! But it works! :)
  );

  return (
    <>
      <NavBar />
      <MaxWidthWrapper className={wrapperClass}>
        <ContestsTable
          lastUpdated={lastUpdated}
          contestData={contestData}
          perPage={parseInt(perPage)}
          setPerPage={setPerPage}
          isExpanded={JSON.parse(isExpanded)}
          handleToggleExpanded={handleToggleExpanded}
        />
      </MaxWidthWrapper>
    </>
  );
};

export default FocusedPage;
