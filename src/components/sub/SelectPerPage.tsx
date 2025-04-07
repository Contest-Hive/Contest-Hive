import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DropdownPerPage({
  perPage,
  setPerPage,
}: {
  perPage: number;
  setPerPage: Dispatch<SetStateAction<string>>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="w-[66px]" 
          title="Show Per Page"
          onClick={() => setOpen(!open)}
        >
          {perPage}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[66px]"
        ref={(ref) =>
          // temporary workaround from https://github.com/shadcn-ui/ui/issues/1220
          ref?.addEventListener('touchend', (e) => e.preventDefault())
        }
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => { setPerPage("3"); setOpen(false); }}>3</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setPerPage("5"); setOpen(false); }}>5</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setPerPage("7"); setOpen(false); }}>7</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setPerPage("10"); setOpen(false); }}>10</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setPerPage("15"); setOpen(false); }}>15</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setPerPage("20"); setOpen(false); }}>20</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setPerPage("25"); setOpen(false); }}>25</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}