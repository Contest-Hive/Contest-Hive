"use client"
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter, usePathname } from "next/navigation";

const GlobalShortcuts = () => {
  const router = useRouter();
  const pathname = usePathname();

  // backspace -> back (only if not already at home)
  useHotkeys("backspace", (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.back();
    }
  });

  // ctrl+backspace -> home
  useHotkeys("ctrl+backspace", (e) => {
    e.preventDefault();
    router.push("/");
  });

  // f -> go to /focused instantly
  useHotkeys("f", (e) => {
    e.preventDefault();
    router.push("/focused");
  });

  // esc -> blur anything selected
  useHotkeys("esc", () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, { enableOnFormTags: true });

  return null;
};

export default GlobalShortcuts;
