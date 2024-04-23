"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getCookie, getCookies, setCookie } from "cookies-next";

const FocusMode = ({
  isFocusMode,
  setFocusMode,
}: {
  isFocusMode: boolean;
  setFocusMode: (focusMode: boolean) => void;
}) => {
  useEffect(() => {
    console.log("Focus Mode", isFocusMode);
    if (Object.keys(getCookies()).length === 0) {
      setCookie("focusMode", false);
      return;
    }
    setCookie("focusMode", isFocusMode);
    toast.success(`Focus Mode <b>${isFocusMode ? "Enabled" : "Disabled"}</b>`, {
      duration: 1500,
      icon: "🎯",
    });
  }, [isFocusMode]);
  return (
    <Button
      variant={isFocusMode ? "default" : "secondary"}
      onClick={() => setFocusMode(!isFocusMode)}
    >
      Focus Mode
    </Button>
  );
};

export default FocusMode;
