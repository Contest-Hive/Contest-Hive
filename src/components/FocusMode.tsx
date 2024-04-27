import { useRef, useEffect, useState } from "react";
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
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      arrowRef.current?.classList.add("animate-out");
      setTimeout(() => {
        arrowRef.current?.classList.add("hidden");
        setIsHidden(true);
      }, 200);
    }, 1500);
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
      {!isFocusMode && !isHidden && (
        <Image
          ref={arrowRef}
          src={url}
          height={1}
          width={1}
          alt="Focus Mode"
          className="absolute -inset-14 top-16 h-fit w-fit scale-[3] select-none duration-200 animate-in md:-inset-24 md:top-24 md:-mt-2 md:scale-[5]"
        />
      )}
    </span>
  );
};

export default FocusMode;
