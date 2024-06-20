import { Recursive } from "next/font/google";
import { GitHubLogoIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

import Slider from "./Slider";
import AnimatedBlob from "./AnimatedBlob";

const fontRecursive = Recursive({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GITHUB_Link = "https://github.com/Contest-Hive/Contest-Hive";
const DOCS_LINK = "https://contest-hive.github.io/docs";

const Hero = () => {
  return (
    <div
      className={cn(
        fontRecursive.className,
        "grainy-dark mx-auto w-full px-2.5 py-10 dark:bg-none md:px-20",
      )}
    >
      <div className="flex items-center justify-center">
        <AnimatedBlob />
      </div>
      <header className="relative pb-8 pt-20 text-center font-heading text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
        <span className="mr-1.5 rounded-lg bg-pinkish px-2 pb-1 pt-1 text-secondary dark:bg-blueish dark:text-primary md:px-3 md:pt-0">
          Contest Hive
        </span>
        is All You Need
      </header>
      <p className="relative mx-auto max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        Contest at your{" "}
        <span className="underline-dotted font-semibold tracking-tight">
          Fingertips.
        </span>
        <br />
        <span className="font-semibold tracking-tighter">
          Contest Hive
        </span>{" "}
        will keep you updated with all the upcoming contests.
      </p>
      <div className="relative flex items-center justify-center gap-2 py-10">
        <Button asChild>
          <Link
            href={GITHUB_Link}
            className="flex items-center justify-center gap-2"
            target="_blank"
          >
            <GitHubLogoIcon />
            Github
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href={DOCS_LINK}
            className="flex items-center justify-center gap-2"
            target="_blank"
          >
            <ReaderIcon />
            API Docs
          </Link>
        </Button>
      </div>
      <Slider />
    </div>
  );
};

export default Hero;
