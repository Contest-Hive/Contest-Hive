"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getCookie, getCookies, setCookie } from "cookies-next";
import { cn } from "@/lib/utils";

import NavBar from "@/components/Navbar";
import ContestsTable from "@/components/ContestsTable";
import ControlPanel from "@/components/ControlPanel";

const Home = () => {
  const [isFocusMode, setFocusMode] = useState(
    getCookie("focusMode") === "true",
  );
  const DefaultClass = "transition-all duration-300 container mx-auto p-4";
  const [mainClass, setMainClass] = useState(DefaultClass);

  useEffect(() => {
    if (Object.keys(getCookies()).length === 0) {
      setCookie("focusMode", false);
      return;
    }
    setCookie("focusMode", isFocusMode);
    setMainClass(
      cn(DefaultClass, isFocusMode ? "-translate-x-full" : "translate-x-0"),
    );
    toast.success(`Focus Mode <b>${isFocusMode ? "Enabled" : "Disabled"}</b>`, {
      duration: 1500,
      icon: "🎯",
    });

    setTimeout(()=>{
      setMainClass(cn(DefaultClass, isFocusMode ? "hidden" : "translate-x-0"));
    }, 300)
  }, [isFocusMode]);
  return (
    <>
      <NavBar />

      <main className={mainClass}>
        <div className="container mx-auto p-4">
          <h1 className="text-center text-4xl font-bold">Contests</h1>
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="py-1 text-center text-6xl font-bold leading-7"
            >
              Hello world from {i}
            </div>
          ))}
        </div>
      </main>
      <ControlPanel isFocusMode={isFocusMode} setFocusMode={setFocusMode} />
    </>
  );
};

export default Home;
