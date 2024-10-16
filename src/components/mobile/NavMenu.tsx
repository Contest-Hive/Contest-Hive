import Anchor from "../typography/Anchor";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";

const OLD_WEBSITE = "https://contest-hive-old.vercel.app";

export function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="h-10 w-10 px-2" title="Open Menu">
          <Menu className="h-full w-full" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <div className="mt-10 flex flex-col">
          <Anchor
            href="/focused"
            className="font-bold"
            title="Go to focused page"
          >
            •Focused•
          </Anchor>
          <Anchor href="/about">About</Anchor>
          <Anchor href="/credits">Credits</Anchor>
          <Separator className="mb-10" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default NavMenu;
