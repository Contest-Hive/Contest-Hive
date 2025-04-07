import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function SelectPerPage({
  perPage,
  setPerPage,
}: {
  perPage: number;
  setPerPage: Dispatch<SetStateAction<string>>;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    
    if (!content) return;
    
    // Function to handle wheel events
    const handleWheel = (e: WheelEvent) => {
      const element = e.currentTarget as HTMLDivElement;
      const { scrollTop, scrollHeight, clientHeight } = element;
      
      // If we're at the top of the dropdown and scrolling up
      // or at the bottom and scrolling down, allow page to scroll
      const isAtTop = scrollTop <= 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
      
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        // Allow the event to bubble up to the page
        e.stopPropagation();
        return;
      }
      
      // Otherwise, prevent propagation to avoid page scroll while navigating dropdown
      e.stopPropagation();
    };
    
    // Add the event listener
    content.addEventListener('wheel', handleWheel);
    
    // Handle touch events for mobile
    content.addEventListener('touchend', (e) => e.preventDefault());
    
    // Clean up event listeners on unmount
    return () => {
      content.removeEventListener('wheel', handleWheel);
      content.removeEventListener('touchend', (e) => e.preventDefault());
    };
  }, []);

  return (
    <Select
      value={perPage.toString()}
      onValueChange={(value) => setPerPage(value)}
    >
      <SelectTrigger className="w-[66px]" title="Show Per Page">
        <SelectValue />
      </SelectTrigger>
      <SelectContent ref={contentRef}>
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