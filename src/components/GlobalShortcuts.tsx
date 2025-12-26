"use client"
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter } from "next/navigation";

const GlobalShortcuts = () => {
  const router = useRouter();

  // backspace -> back
  useHotkeys("backspace", (e) => {
    e.preventDefault();
    router.back();
  });

  // ctrl+backspace -> home
  useHotkeys("ctrl+backspace", (e) => {
    e.preventDefault();
    router.push("/");
  });

  // h -> home
  useHotkeys("h", (e) => {
    e.preventDefault();
    router.push("/");
  });

  // f -> go to /focused instantly
  useHotkeys("f", (e) => {
    e.preventDefault();
    router.push("/focused");
  });

  return null;
};

export default GlobalShortcuts;
