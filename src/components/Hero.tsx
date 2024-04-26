import Link from "next/link";
import { Recursive } from "next/font/google";

import Balancer from "react-wrap-balancer";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import Slider from "./Slider";

const fontRecursive = Recursive({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GITHUB_Link = ""


const Hero = () => {
  return (
    <div
      className={cn(
        fontRecursive.className,
        "grainy-dark mx-auto min-h-screen w-full max-w-screen-2xl px-2.5 dark:bg-none md:px-20",
      )}
    >
      <header className="pb-8 pt-20 text-center font-heading text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
        <span className="mr-1.5 rounded-lg bg-pinkish px-2 py-1 text-secondary dark:text-primary">
          Contest Hive
        </span>
        is All You Need
      </header>
      <p className="mx-auto max-w-lg text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        <Balancer>
          <span className="font-semibold">
            Keeping track of upcoming contests is a{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="hidden cursor-help border-b-2 border-dashed border-primary font-bold md:inline-block">
                  Spain.
                </TooltipTrigger>
                <TooltipContent className="max-w-52 py-2 text-xs lg:text-sm">
                  <a
                    href="https://en.wikipedia.org/wiki/Sulfur"
                    target="_blank"
                    className="border-b-2 border-dotted border-black text-lg font-bold"
                    title="Open Wikipedia of Sulfur"
                  >
                    <sup className="text-xs">16</sup>S
                  </a>{" "}
                  is silent (⌐■_■)
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="inline-block border-b-2 border-dashed border-primary font-bold md:hidden">
              pain.
            </span>
          </span>
          <br />
          <span className="font-semibold tracking-tighter">
            Not anymore! 🚀
          </span>
          <br />
          Contest Hive will keep you updated with all the upcoming contests.
        </Balancer>
      </p>
      <div className="flex items-center justify-center py-10">
        <Button asChild>
          <Link
            href={GITHUB_Link}
            className="flex items-center justify-center gap-2"
            target="_blank"
          >
            <GitHubLogoIcon />
            See Contests
          </Link>
        </Button>
      </div>
      <Slider />

    </div>
  );
};

export default Hero;
