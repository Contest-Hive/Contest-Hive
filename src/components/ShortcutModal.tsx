"use client";

import { useState, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { cn } from "@/lib/utils";

const ShortcutModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll is 0, show it. Otherwise, hide it.
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const groups = [
    {
      title: "Navigation",
      items: [
        { key: "f", desc: "Go to `Focused` Page" },
        { key: "Backspace", desc: "Go Back" },
        { key: "Ctrl + Backspace", desc: "Home Page" },
      ],
    },
    {
      title: "Contests & Interface",
      items: [
        { key: "\\", desc: "Toggle `Platform` Menu" },
        { key: "Ctrl + K", desc: "Search for Contest" },
        { key: "Alt + T", desc: "Toggle Theme" },
        { key: "Ctrl + .", desc: "Toggle Wide Mode" },
        { key: "← / →", desc: "Prev / Next Page" },
      ],
    },
    {
      title: "System",
      items: [
        { key: "/", desc: "Open Shortcuts" },
        { key: "Esc", desc: "Close Modal / `Blur` Focus" },
      ],
    },
  ];

  const toggleModal = () => setIsOpen((prev) => !prev);
  const closeModal = () => setIsOpen(false);

  useHotkeys("/", (e) => {
    e.preventDefault();
    toggleModal();
  });

  useHotkeys(
    "esc",
    (e) => {
      if (isOpen) {
        e.preventDefault();
        closeModal();
      }
    },
    { enableOnFormTags: true },
  );

  const formatDesc = (text: string) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, i) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={i}
            className="mx-0.5 rounded bg-blue-100 px-1 pb-[1px] font-mono text-[12px] font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={toggleModal}
        className={cn(
          "fixed bottom-6 right-6 z-[90] flex h-10 items-center gap-2 rounded-full border border-gray-200 bg-gray-50/70 px-4 text-sm font-medium shadow-lg transition-all duration-300 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-700",
          isAtTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none",
        )}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded bg-background/50 text-[10px] text-primary">
          ?
        </span>
        Shortcuts
        <kbd className="ml-1 hidden rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] dark:bg-gray-700 md:block">
          /
        </kbd>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm duration-200 animate-in fade-in"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-xl transform overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl transition-all duration-200 animate-in zoom-in-95 dark:border-gray-800 dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-6 py-3 dark:border-gray-800 dark:bg-gray-800/50">
              <h2 className="flex items-center gap-2 text-base font-bold text-gray-800 dark:text-white">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-background/50 text-[10px] text-primary">
                  ?
                </span>
                Shortcuts
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Don&apos;t leave your keyboard
              </span>
            </div>

            <div className="custom-scrollbar max-h-[70vh] overflow-y-auto p-5">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                {groups.map((group) => (
                  <div key={group.title} className="flex flex-col gap-2">
                    <h3 className="mb-1 text-[11px] font-bold uppercase tracking-wider text-blue-500/80">
                      {group.title}
                    </h3>
                    {group.items.map((item) => (
                      <div
                        key={item.desc}
                        className="flex items-center justify-between border-b border-gray-50 pb-1.5 last:border-0 dark:border-gray-800"
                      >
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {formatDesc(item.desc)}
                        </span>
                        <div className="flex items-center gap-1">
                          <kbd className="min-w-[1.8rem] rounded border border-gray-300 bg-white px-1.5 py-0.5 text-center font-mono text-[10px] font-bold text-gray-700 shadow-[0_1.5px_0_rgba(0,0,0,0.1)] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:shadow-[0_1.5px_0_rgba(255,255,255,0.05)]">
                            {item.key}
                          </kbd>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShortcutModal;
