import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

export default function SelectPerPage({
  perPage,
  setPerPage,
}: {
  perPage: number;
  setPerPage: Dispatch<SetStateAction<string | number>>;
}) {
  return (
    <Select
      value={perPage.toString()}
      onValueChange={(value) => setPerPage(value)}
    >
      <SelectTrigger className="w-[66px]" title="Show Per Page">
        <SelectValue />
      </SelectTrigger>
      <SelectContent 
        ref={(ref) =>
        // temporary workaround from https://github.com/shadcn-ui/ui/issues/1220
        ref?.addEventListener('touchend', (e) => e.preventDefault())
      }>
        <SelectGroup>
          <SelectLabel>Select</SelectLabel>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="7">7</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="25">25</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
