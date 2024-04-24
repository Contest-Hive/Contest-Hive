"use client";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { getCookie, getCookies, setCookie } from "cookies-next";

import NavBar from "@/components/Navbar";
import ContestsTable from "@/components/ContestsTable";

const HomePage = ({ contestData }) => {
  const { toast } = useToast();
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
      // if (prevFocusMode)
      //   setTimeout(() => {
      //     toast({
      //       title: "Found saved Focus Mode",
      //       description: "You can toggle it from the navbar",
      //     });
      //   });
      return;
    }

    setCookie("focusMode", isFocusMode);
  }, [isFocusMode, firstLoad, toast]);

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
