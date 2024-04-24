"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getCookie, getCookies, setCookie } from "cookies-next";

import ContestsTable from "@/components/ContestsTable";
import ControlPanel from "@/components/ControlPanel";

const HomePage = ({ contestData }) => {
  const [isFocusMode, setFocusMode] = useState(false);

  useEffect(() => {
    if (Object.keys(getCookies()).length === 0) {
      setCookie("focusMode", false);
      return;
    }
    const focusMode = getCookie("focusMode") === "true";
    setCookie("focusMode", focusMode);
    toast.success(`Focus Mode <b>${focusMode ? "Enabled" : "Disabled"}</b>`, {
      duration: 1500,
      icon: "🎯",
    });
  }, [isFocusMode]);

  return (
    <>
      <main>
        {isFocusMode ? (
          <div className="container mx-auto p-4">
            <h1 className="my-10 text-center text-4xl font-bold">Contests</h1>
            <ContestsTable contestData={contestData} />
          </div>
        ) : (
          <div className="container mx-auto p-4">
            <h1 className="text-center text-8xl font-bold my-10">Normal Mode</h1>
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
      <ControlPanel isFocusMode={isFocusMode} setFocusMode={setFocusMode} />
    </>
  );
};

export default HomePage;
