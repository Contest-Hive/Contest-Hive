"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { GitHubLogoIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Heading from "@/components/typography/Heading";
import Highlight from "@/components/typography/Highlight";
import Slider from "@/components/Slider";
import AnimatedBlob from "@/components/sub/AnimatedBlob";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const GITHUB_Link = "https://github.com/Contest-Hive/Contest-Hive";
const DOCS_LINK = "https://contest-hive.github.io/docs";
const TELEGRAM_CHANNEL = "https://t.me/ContestHive";

const Hero = () => {
  const STORAGE_KEY = "contest-hive-stars";

  const [starCount, setStarCount] = useState<null | number>(null);

  useEffect(() => {
    // Load from localStorage first (if available)
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) setStarCount(Number(cached));

    // then fetch fresh value and update both
    fetch("https://api.github.com/repos/Contest-Hive/Contest-Hive")
      .then((res) => res.json())
      .then((data) => {
        const count = data.stargazers_count;
        setStarCount(count);
        localStorage.setItem(STORAGE_KEY, String(count));
      });
  }, []);
  return (
    <div className="grainy-dark mx-auto w-full px-2.5 py-10 dark:!bg-none md:px-20">
      <div className="flex items-center justify-center">
        <AnimatedBlob />
      </div>
      <Heading className="relative">
        <Highlight>Contests</Highlight> at your{" "}
        <span className="tracking-tighter">Fingertips</span>
      </Heading>
      <p className="relative mx-auto max-w-lg text-balance text-center text-base md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        <span className="font-semibold tracking-tighter">Contest Hive</span>{" "}
        will keep you updated with all the upcoming contests.
        <br />
        <span className="text-sm text-primary/90 md:text-base">
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
              className="group relative flex items-center justify-center gap-2"
              target="_blank"
            >
              <GitHubLogoIcon />
              Github
              <span className="absolute -left-[23px] -top-[15px] inline-flex items-center justify-center gap-1 rounded-[10px] bg-blue-100 px-2 py-1 font-mono text-xs text-gray-900 dark:bg-[#001933] dark:text-gray-100">
                {starCount ?? `•`}
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-all duration-200 group-hover:rotate-[19deg]"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    {" "}
                    <path
                      d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                      fill="#0092dcff"
                    ></path>
                  </g>
                </svg>
              </span>
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
