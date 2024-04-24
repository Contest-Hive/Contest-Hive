import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ui/theme-toggle";
import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavMenu from "./mobile/NavMenu";

const NavBar = () => {
  return (
    <div className="sticky inset-0 top-0 z-50 h-14 backdrop-blur">
      <MaxWidthWrapper>
        <div className="flex h-14 flex-1 items-center justify-between gap-2 px-2 md:gap-4">
          <Link
            href="/"
            className="flex h-12 items-center gap-2 self-center px-1"
          >
            <Image
              src="/favicon.svg"
              height={1}
              width={1}
              alt="Contest Hive Logo"
              className="h-10 w-10"
            />
            <p className="text-2xl font-semibold tracking-tighter text-primary">
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
            <ModeToggle />
          </div>
          <span className="flex items-center gap-4 md:hidden">
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
