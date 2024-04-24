"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getCookie, getCookies, setCookie } from "cookies-next";

import NavBar from "@/components/Navbar";
import ContestsTable from "@/components/ContestsTable";

const HomePage = ({ contestData }) => {
  const [isFocusMode, setFocusMode] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (Object.keys(getCookies()).length === 0) {
      setCookie("focusMode", false);
      return;
    }
    if (firstLoad) {
      console.log("First Load");
      setFirstLoad(false);
      const prevFocusMode = getCookie("focusMode") === "true";
      setFocusMode(prevFocusMode);
      setTimeout(() => {
        if (prevFocusMode)
          toast.success(`Focus Mode <b>Enabled</b>`, {
            duration: 1500,
            icon: "🎯",
          });
      });
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
          <div className="container mx-auto p-4">
            <h1 className="my-10 text-center text-8xl font-bold">
              Normal Mode
            </h1>
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="py-1 text-center text-6xl font-bold leading-7"
              >
                Hello world from {i}
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default HomePage;
