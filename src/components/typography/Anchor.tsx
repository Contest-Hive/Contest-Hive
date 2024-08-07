import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Anchor = ({
  children,
  className,
  normal = false,
  href,
  target,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  normal?: boolean;
  href: string;
  target?: string;
  title?: string;
}) => {
  if (normal) {
    return (
      <a
        href={href}
        target={target}
        title={title}
        className={cn(
          buttonVariants({ variant: "link" }),
          "mx-1 px-1 lg:mx-2",
          className,
        )}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      target={target}
      title={title}
      className={cn(
        buttonVariants({ variant: "link" }),
        "mx-1 px-1 lg:mx-2",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default Anchor;
