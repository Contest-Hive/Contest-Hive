import { useEffect } from "react";

/**
 * Custom hook to handle keyboard shortcuts.
 * @param {Array} shortcuts - Array of shortcut objects:
 * { key: string, action: function, runOnInput: boolean }
 * Key format examples: "f", "ctrl+.", "shift+s", "alt+enter"
 */
export default function useKeyboardShortcut(shortcuts) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const isInput =
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA" ||
        event.target.isContentEditable;

      const pressedKey = event.key.toLowerCase();
      const isCtrl = event.ctrlKey || event.metaKey; // Meta is Cmd on Mac
      const isShift = event.shiftKey;
      const isAlt = event.altKey;

      for (const shortcut of shortcuts) {
        const parts = shortcut.key.toLowerCase().split("+");
        const baseKey = parts.pop(); // The main key (e.g., "." or "f")

        const needsCtrl = parts.includes("ctrl") || parts.includes("cmd");
        const needsShift = parts.includes("shift");
        const needsAlt = parts.includes("alt");

        const match =
          pressedKey === baseKey &&
          isCtrl === needsCtrl &&
          isShift === needsShift &&
          isAlt === needsAlt;

        if (match) {
          if (isInput && !shortcut.runOnInput) {
            continue;
          }
          event.preventDefault();
          shortcut.action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
}
