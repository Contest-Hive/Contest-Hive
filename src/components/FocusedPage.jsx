"use client";
import { useEffect, useState } from "react";
import { getCookie, getCookies, setCookie } from "cookies-next";

import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContestsTable from "@/components/ContestsTable";
import CompressedContestTable from "@/components/CompressedContestTable";

const FocusedPage = ({ contestData }) => {
  const components = "stats contact footer";
  const [isFocusMode, setFocusMode] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (isFocusMode) {
      for (let component of components.split(" "))
        document.getElementById(component).classList.add("hidden");
    } else {
      for (let component of components.split(" "))
        document.getElementById(component).classList.remove("hidden");
    }

    if (Object.keys(getCookies()).length === 0) {
      setCookie("focusMode", false, { maxAge: 34560000 });
      setFirstLoad(false);
      return;
    }
    if (firstLoad) {
      // console.log("First Load");
      setFirstLoad(false);
      const prevFocusMode = getCookie("focusMode") === "true";
      setFocusMode(prevFocusMode);
      return;
    }

    setCookie("focusMode", isFocusMode, { maxAge: 34560000 });
  }, [isFocusMode, firstLoad]);

  return (
    <>
      <NavBar isFocusMode={isFocusMode} setFocusMode={setFocusMode} />
      {isFocusMode ? (
        <div className="container mx-auto px-1 py-4 md:p-4">
          <ContestsTable contestData={contestData} />
        </div>
      ) : (
        <div>
          <Hero />
          <CompressedContestTable contestData={contestData} />
        </div>
      )}
    </>
  );
};

export default FocusedPage;
