import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

import { Crosshair2Icon } from "@radix-ui/react-icons";

const FocusMode = ({
  isFocusMode,
  setFocusMode,
}: {
  isFocusMode: boolean;
  setFocusMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const arrowRef = useRef<HTMLImageElement | null>(null);
  const url = "/assets/svgs/arrow.svg";

  useEffect(() => {
    setTimeout(() => {
      arrowRef.current?.classList.add("animate-out");
      setTimeout(() => {
        arrowRef.current?.classList.add("hidden");
      }, 200);
    }, 2000);
  }, []);

  return (
    <span className="relative">
      <Button
        variant="outline"
        className="group h-10 w-10 select-none px-2"
        onClick={() => setFocusMode((prev) => !prev)}
      >
        <Crosshair2Icon className="h-6 w-6 cursor-pointer text-primary transition-all duration-100 active:scale-90 group-hover:rotate-45" />
      </Button>
      {!isFocusMode && (
        <Image
          ref={arrowRef}
          src={url}
          height={1}
          width={1}
          alt="Focus Mode"
          className="absolute -inset-14 top-16 h-full w-full scale-[3] select-none duration-200 animate-in md:-inset-24 md:top-20 md:scale-[5]"
        />
      )}
    </span>
  );
};

export default FocusMode;
