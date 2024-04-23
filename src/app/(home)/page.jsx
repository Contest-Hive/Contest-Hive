"use client";
import { useState } from "react";

import NavBar from "@/components/Navbar";
import ContestsTable from "@/components/ContestsTable";
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
        <ContestsTable isFocusMode={isFocusMode} setFocusMode={setFocusMode} />
      ) : (
        <NavBar />
      )}
    </>
  );
};

export default Home;
