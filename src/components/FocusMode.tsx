import { useRef, useEffect, useState } from "react";
import { Button } from "./ui/button";

import { Crosshair2Icon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FocusMode = ({
  isFocusMode,
  setFocusMode,
}: {
  isFocusMode: boolean;
  setFocusMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, []);

  return (
    <span className="relative">
      <TooltipProvider>
        <Tooltip delayDuration={100} defaultOpen open={isOpen}>
          <TooltipTrigger asChild>
            <Button
              title="Toggle Focus Mode"
              variant="outline"
              className="group h-10 w-10 select-none px-2"
              onClick={() => setFocusMode((prev) => !prev)}
            >
              <Crosshair2Icon className="h-6 w-6 cursor-pointer text-primary transition-all duration-100 active:scale-90 group-hover:rotate-45" />
            </Button>
          </TooltipTrigger>
          {!isFocusMode && (
            <TooltipContent>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -mt-[19px] ml-[25px] h-4 w-4 fill-background stroke-border"
              >
                <g id="Shape / Triangle">
                  <path
                    id="Vector"
                    d="M4.37891 15.1999C3.46947 16.775 3.01489 17.5634 3.08281 18.2097C3.14206 18.7734 3.43792 19.2851 3.89648 19.6182C4.42204 20.0001 5.3309 20.0001 7.14853 20.0001H16.8515C18.6691 20.0001 19.5778 20.0001 20.1034 19.6182C20.5619 19.2851 20.8579 18.7734 20.9172 18.2097C20.9851 17.5634 20.5307 16.775 19.6212 15.1999L14.7715 6.79986C13.8621 5.22468 13.4071 4.43722 12.8135 4.17291C12.2957 3.94236 11.704 3.94236 11.1862 4.17291C10.5928 4.43711 10.1381 5.22458 9.22946 6.79845L4.37891 15.1999Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <p className="font-semibold tracking-tight">Try me out</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </span>
  );
};

export default FocusMode;
