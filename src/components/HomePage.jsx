"use client";
import { Recursive } from "next/font/google";

import { useEffect, useState } from "react";
import { getCookie, getCookies, setCookie } from "cookies-next";

import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContestsTable from "@/components/ContestsTable";
import CompressedContestTable from "@/components/CompressedContestTable";
import Stats from "./Stats";


const fontRecursive = Recursive({
  subsets: ["latin"],
  variable: "--font-sans",
});

const HomePage = ({ contestData, statsData }) => {
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
          <div className="container mx-auto px-1 py-4 md:p-4">
            <ContestsTable contestData={contestData} />
          </div>
        ) : (
          <div className={fontRecursive.className}>
            <Hero />
            <CompressedContestTable contestData={contestData} />
            <Stats statsData={statsData}/>
          </div>
        )}
      </main>
    </>
  );
};

export default HomePage;
