"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Anchor from "./typography/Anchor";
import { CircleHelp } from "lucide-react";

import ModeToggle from "./ui/theme-toggle";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import NavMenu from "./mobile/NavMenu";
import { cn } from "@/lib/utils";

const OLD_WEBSITE = "https://contest-hive-old.vercel.app";

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setShow(true);
        return;
      }
      setScrollY(window.scrollY);
      setShow(scrollY > window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div
      className={cn(
        "sticky inset-0 top-0 z-50 h-12 bg-white bg-opacity-70 backdrop-blur-lg transition-all duration-300 dark:bg-transparent md:h-14 md:bg-opacity-30",
        show ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <MaxWidthWrapper className="relative">
        <div className="flex h-12 flex-1 items-center justify-between gap-2 px-2 md:h-14 md:gap-4">
          <Link
            prefetch={false}
            shallow={true}
            href="/"
            className="flex h-full items-center gap-0.5 self-center px-1 md:gap-2"
          >
            <Image
              priority
              src="/favicon.svg"
              height={1}
              width={1}
              alt="Contest Hive Logo"
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <p className="text-lg font-semibold tracking-tighter text-primary md:text-2xl">
              Contest Hive
            </p>
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            {/* Nav Links - Hidden on Mobile */}
            <div className="hidden items-center gap-2 md:flex">
              <Anchor
                href="/focused"
                className="font-bold"
                title="Go to focused page"
              >
                •Focused•
              </Anchor>
              <Anchor href="/about">About</Anchor>
              <Anchor href="/credits">Credits</Anchor>
              <Separator className="ml-1 mr-2 h-7" orientation="vertical" />
            </div>

            {/* THE FIX: Render ModeToggle exactly ONCE here */}
            <ModeToggle />

            {/* Mobile Menu - Hidden on Desktop */}
            <div className="md:hidden">
              <NavMenu />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <Separator />
    </div>
  );
};

export default NavBar;
