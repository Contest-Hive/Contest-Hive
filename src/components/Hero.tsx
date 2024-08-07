/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { GitHubLogoIcon, ReaderIcon } from "@radix-ui/react-icons";
import { ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Highlight from "./typography/Highlight";
import Slider from "./Slider";
import AnimatedBlob from "./sub/AnimatedBlob";
import { cn } from "@/lib/utils";

const GITHUB_Link = "https://github.com/Contest-Hive/Contest-Hive";
const DOCS_LINK = "https://contest-hive.github.io/docs";
const TELEGRAM_CHANNEL = "https://t.me/ContestHive";
const GOOGLE_FORM = "https://forms.gle/xmvC3KdvAzcRXk7j6";

const Hero = () => {
  return (
    <div className="grainy-dark mx-auto w-full px-2.5 py-10 dark:bg-none md:px-20">
      <div className="flex items-center justify-center">
        <AnimatedBlob />
      </div>
      <header className="relative pb-8 pt-20 text-center font-heading text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
        <Highlight>Contest</Highlight>
        at your <span className="tracking-tighter">Fingertips</span>
      </header>
      <p className="relative mx-auto max-w-lg text-balance text-center text-base md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        <span className="font-semibold tracking-tighter">Contest Hive</span>{" "}
        will keep you updated with all the upcoming contests.
        <br />
        <span className="text-sm text-primary/90 md:text-base">
          Keep your 👀 on our <b>Telegram</b> channel for contest alerts.
        </span>
        <br />
        <Link
          href={GOOGLE_FORM}
          target="_blank"
          className={buttonVariants({ variant: "link" })}
        >
          <span className="underline-dotted font-sans text-xs tracking-wider text-primary/90 md:text-sm">
            Don&apos;t like this UI? 📝
          </span>
        </Link>
      </p>
      <div className="relative flex flex-col items-center justify-center gap-2 py-6">
        <div className="flex items-center justify-center gap-2">
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
        <div className="flex items-center justify-center gap-2">
          <Button asChild variant="outline">
            <Link href={TELEGRAM_CHANNEL} target="_blank">
              <img
                src="/assets/svgs/telegram.svg"
                alt="Telegram Logo"
                className="h-7 w-7"
              />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href="#contest-table"
              className="flex items-center justify-center gap-1"
            >
              View Contests <ChevronDown size={20} />
            </Link>
          </Button>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Hero;
