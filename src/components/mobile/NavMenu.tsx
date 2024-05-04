import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import Link from "next/link";
import { Separator } from "../ui/separator";


const OLD_WEBSITE = "https://contest-hive-old.vercel.app"


export function NavMenu() {
  const defaultClass =
    "pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted px-1.5 font-mono font-medium text-primary text-sm";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="h-10 w-10 px-2" title="Open Menu">
          <Menu className="h-full w-full" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <div className="mt-10 flex flex-col">
          <Link
            href="/about"
            className={buttonVariants({
              variant: "link",
            })}
          >
            About
          </Link>
          <Link
            href="/credits"
            className={buttonVariants({
              variant: "link",
            })}
          >
            Credits
          </Link>

          <Link
            href={OLD_WEBSITE}
            target="_blank"
            className={buttonVariants({
              variant: "link",
            })}
          >
            Old Website
          </Link>

          <Separator className="mb-10" />
          {/* <KeyboardShortcuts /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default NavMenu;
