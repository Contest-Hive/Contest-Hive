import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}) => {
  return (
    <div className="relative flex-1 items-center md:grow-0">
      <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 focus-visible:ring-0 md:w-[200px] lg:w-[320px]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
