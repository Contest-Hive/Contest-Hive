"use client";
import { useState } from "react";

import NavBar from "@/components/Navbar";
import ContestTable from "../contestTable/page";

import { getCookie } from "cookies-next";

const Home = () => {
  const [isFocusMode, setFocusMode] = useState(
    getCookie("focusMode") === "true",
  );
  return (
    <>
      <NavBar
        isHome={true}
        isFocusMode={isFocusMode}
        setFocusMode={setFocusMode}
      />
      {isFocusMode ? (
        <ContestTable isFocusMode={isFocusMode} setFocusMode={setFocusMode} />
      ) : (
        <NavBar />
      )}
    </>
  );
};

export default Home;
