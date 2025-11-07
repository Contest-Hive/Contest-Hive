import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";

import { cn } from "@/lib/utils";
import ResponsiveTooltip from "./ui/responsiveTooltip";

const PORTFOLIO_URL = "https://nusab19.pages.dev";

const HeartIcon = () => (
  <svg
    className="inline h-5 w-5 animate-bounce text-sky-600 dark:text-blue-500 md:h-6 md:w-6"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z"
      fill="currentColor"
    />
  </svg>
);

const BangladeshFlag = () => (
  <svg
    className="mb-1.5 ml-1 inline-block h-5 w-5 rounded-sm"
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-bd"
    viewBox="0 0 640 480"
  >
    <path fill="#006a4e" d="M0 0h640v480H0z"></path>
    <circle cx="280" cy="240" r="160" fill="#f42a41"></circle>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="pt-20">
      <Separator />
      <div className="container mx-auto px-4 pb-14 pt-6">
        <div className="text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-2">
            Made with <HeartIcon /> by{" "}
            <ResponsiveTooltip
              content={
                <span className="text-balance">
                  Hehe, you don&apos;t recognize the flag?
                  <br/>
                  Nah, it&apos;s not{" "}
                  <b className="text-emerald-600 dark:text-emerald-500">
                    Vegan Japan
                  </b>
                  !
                  <br/>
                  <br/>
                  It&apos;s <b className="text-red-600 dark:text-red-500">Bangladesh</b>, my home country! 
                </span>
              }
              className="max-w-60 text-xs text-balance"
            >
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                className={cn(buttonVariants({ variant: "link" }), "px-0")}
              >
                Nusab Taha <BangladeshFlag />
              </a>
            </ResponsiveTooltip>
          </p>
          &copy; All rights reserved 2023 - {currentYear}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
