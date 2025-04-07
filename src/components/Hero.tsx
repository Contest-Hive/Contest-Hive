/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { GitHubLogoIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Heading from "@/components/typography/Heading";
import Highlight from "@/components/typography/Highlight";
import Slider from "@/components/Slider";
import AnimatedBlob from "@/components/sub/AnimatedBlob";
import { ChevronDown } from "lucide-react";

const GITHUB_Link = "https://github.com/Contest-Hive/Contest-Hive";
const DOCS_LINK = "https://contest-hive.github.io/docs";
const TELEGRAM_CHANNEL = "https://t.me/ContestHive";
const GOOGLE_FORM = "https://forms.gle/xmvC3KdvAzcRXk7j6";

const Hero = () => {
  return (
    <div className="grainy-dark mx-auto w-full px-2.5 py-10 md:px-20 dark:!bg-none">
      <div className="flex items-center justify-center">
        <AnimatedBlob />
      </div>
      <Heading className="relative">
        <Highlight>Contests</Highlight> at your{" "}
        <span className="tracking-tighter">Fingertips</span>
      </Heading>
      <p className="relative mx-auto max-w-lg text-center text-base text-balance md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        <span className="font-semibold tracking-tighter">Contest Hive</span>{" "}
        will keep you updated with all the upcoming contests.
        <br />
        <span className="text-primary/90 text-sm md:text-base">
          Keep your <span title="eyes emoji">👀</span> on our{" "}
          <b className="text-[#26a5e4] dark:text-[#2bb8ff]">Telegram</b> channel
          for contest alerts.
        </span>
        <br />
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
                fetchPriority="high"
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
