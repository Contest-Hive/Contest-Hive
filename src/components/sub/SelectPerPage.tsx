import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

export default function SelectPerPage({
  perPage,
  setPerPage,
}: {
  perPage: number;
  setPerPage: (perPage: number) => void;
}) {

  return (
    <Select
      defaultValue={perPage.toString()}
      onValueChange={(value) => setPerPage(parseInt(value))}
    >
      <SelectTrigger className="w-[66px]">
        <SelectValue placeholder="5"/>
      </SelectTrigger>
      <SelectContent>
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
