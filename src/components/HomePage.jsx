"use client";
import { useEffect, useState } from "react";
import { getCookie, getCookies, setCookie } from "cookies-next";

import NavBar from "@/components/Navbar";
import ContestsTable from "@/components/ContestsTable";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "./MaxWidthWrapper";

const HomePage = ({ contestData }) => {
  const [isFocusMode, setFocusMode] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (Object.keys(getCookies()).length === 0) {
      setCookie("focusMode", false);
      setFirstLoad(false);
      return;
    }
    if (firstLoad) {
      console.log("First Load");
      setFirstLoad(false);
      const prevFocusMode = getCookie("focusMode") === "true";
      setFocusMode(prevFocusMode);
      return;
    }

    setCookie("focusMode", isFocusMode);
  }, [isFocusMode, firstLoad]);

  return (
    <>
      <NavBar setFocusMode={setFocusMode} />

      <main>
        {isFocusMode ? (
          <div className="container mx-auto p-4">
            <ContestsTable contestData={contestData} />
          </div>
        ) : (
          <div>
            <Hero />
          </div>
        )}
      </main>
    </>
  );
};

export default HomePage;
