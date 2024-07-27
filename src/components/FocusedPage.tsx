"use client";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContestsTable from "@/components/ContestsTable";
import CompressedContestTable from "@/components/CompressedContestTable";

import type { ContestType } from "@/lib/types";

const FocusedPage = ({ contestData }: { contestData: ContestType[] }) => {
  const components = "stats contact footer";
  const [firstLoad, setFirstLoad] = useState(true);
  const [isFocusMode, setFocusMode] = useState(false);
  const [perPage, setPerPage] = useState("7");
  // const [isFocusMode, setFocusMode] = useLocalStorage("focusMode", false);
  // const [perPage, setPerPage] = useLocalStorage("perPage", "7");

  useEffect(() => {
    if (firstLoad) {
      const localFocusMode = localStorage.getItem("focusMode") === "true";
      const localPerPage = localStorage.getItem("perPage")?.replaceAll('"', "") || "7";
      if (localFocusMode) setFocusMode(localFocusMode);
      if (localPerPage) setPerPage(localPerPage);
      setFirstLoad(false);
      return;
    }

    localStorage.setItem("focusMode", isFocusMode.toString());
    localStorage.setItem("perPage", perPage);

    if (isFocusMode) {
      for (let component of components.split(" "))
        document.getElementById(component)?.classList.add("hidden");
    } else {
      for (let component of components.split(" "))
        document.getElementById(component)?.classList.remove("hidden");
    }
    setFocusMode(isFocusMode);
  }, [isFocusMode, perPage, setFocusMode, firstLoad]);

  return (
    <>
      <NavBar isFocusMode={isFocusMode} setFocusMode={setFocusMode} />
      {isFocusMode ? (
        <div className="container mx-auto px-1 py-4 md:p-4">
          <ContestsTable
            contestData={contestData}
            perPage={parseInt(perPage)}
            setPerPage={setPerPage}
          />
        </div>
      ) : (
        <div>
          <Hero />
          <CompressedContestTable
            contestData={contestData}
            perPage={parseInt(perPage)}
            setPerPage={setPerPage}
          />
        </div>
      )}
    </>
  );
};

export default FocusedPage;
