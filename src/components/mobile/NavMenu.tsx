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

export function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="h-10 w-10 px-2">
          <Menu className="h-full w-full" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <div className=" my-10 flex flex-col gap-4">
          <Link
            href="/about"
            className={buttonVariants({
              variant: "link",
            })}
          >
            About
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default NavMenu;
