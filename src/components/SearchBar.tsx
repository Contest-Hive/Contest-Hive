import { useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

import { useHotkeys } from "react-hotkeys-hook";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // ctrl + k
  useHotkeys("ctrl+k", (event) => {
    console.log("Meow Meow ctrl+k");
    event.preventDefault();
    inputRef.current?.focus();
  });
  useHotkeys(
    "esc",
    () => {
      event?.preventDefault();
      inputRef.current?.blur();
    },
    {
      enableOnFormTags: true,
    },
  );
  return (
    <div className="relative flex-1 items-center md:grow-0">
      <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        ref={inputRef}
        type="search"
        placeholder="Search (Ctrl + K)"
        className="w-full rounded-lg bg-background pl-8 focus-visible:ring-0 md:w-[200px] lg:w-[320px]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
