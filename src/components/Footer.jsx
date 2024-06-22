import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";

import { cn } from "@/lib/utils";

const PORTFOLIO_URL = "https://nusab19.pages.dev";

const Footer = () => {
  return (
    <footer id="footer" className="pt-20">
      <Separator />
      <div className="container mx-auto px-4 pb-14 pt-6">
        <p className="text-center text-sm text-gray-500">
          Made with ❤️ by{" "}
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            className={cn(buttonVariants({ variant: "link" }), "px-0")}
          >
            Nusab Taha{" "}
            <svg
              className="mb-1.5 ml-1 inline-block h-5 w-5 rounded-sm"
              xmlns="http://www.w3.org/2000/svg"
              id="flag-icons-bd"
              viewBox="0 0 640 480"
            >
              <path fill="#006a4e" d="M0 0h640v480H0z"></path>
              <circle cx="280" cy="240" r="160" fill="#f42a41"></circle>
            </svg>
          </a>
          <br />
          &copy; All rights reserved 2023 - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
