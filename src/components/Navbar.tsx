import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ui/theme-toggle";
import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";

import MaxWidthWrapper from "./MaxWidthWrapper";
import NavMenu from "./mobile/NavMenu";
import FocusMode from "./FocusMode";

const NavBar = ({
  setFocusMode,
}: {
  setFocusMode: (focusMode: boolean) => void;
}) => {
  return (
    <div className="sticky inset-0 top-0 z-50 h-12 backdrop-blur md:h-14">
      <MaxWidthWrapper>
        <div className="flex h-12 flex-1 items-center justify-between gap-2 px-2 md:h-14 md:gap-4">
          <Link
            href="/"
            className="flex h-full items-center gap-1 self-center px-1 md:gap-2"
          >
            <Image
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

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/about"
              className={buttonVariants({
                variant: "link",
              })}
            >
              About
            </Link>
            <FocusMode setFocusMode={setFocusMode} />
            <ModeToggle />
          </div>
          <span className="flex items-center gap-1 md:hidden">
            <FocusMode setFocusMode={setFocusMode} />
            <ModeToggle />
            <NavMenu />
          </span>
        </div>
      </MaxWidthWrapper>
      <Separator />
    </div>
  );
};

export default NavBar;
