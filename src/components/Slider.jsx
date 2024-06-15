import { useRef } from "react";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const images =
  "atcoder codeforces leetcode codechef toph hackerrank hackerearth".split(" ");

const Slider = () => {
  const marqueeRef = useRef(null);

  return (
    <MaxWidthWrapper className="cursor-pointer">
      <div
        className="flex select-none overflow-hidden py-4 md:py-10"
        ref={marqueeRef}
      >
        {images.map((image) => (
          <div
            key={image}
            className={cn(
              "flex flex-col items-center justify-center font-semibold grayscale transition-all duration-300 ease-in-out hover:grayscale-0",
              images.indexOf(image) % 2 ? "hover:-rotate-6" : "hover:rotate-6",
            )}
          >
            <Image
              src={`/assets/svgs/platforms/transparent/${image}.svg`}
              alt={image}
              width={1}
              height={1}
              className="mx-10 h-16 w-16 rounded-md p-4 dark:bg-primary md:h-24 md:w-24"
            />
            <p>{image[0].toUpperCase() + image.slice(1)}</p>
          </div>
        ))}
      </div>
      <Marquee
        autoFill
        // delay={100}
        className="select-none overflow-hidden py-4 md:py-10"
        onMount={() => {
          // remove `marqueeRef.current` from the DOM
          marqueeRef.current.remove();
        }}
      >
        {images.map((image) => (
          <div
            key={image}
            className={cn(
              "flex flex-col items-center justify-center font-semibold grayscale transition-all duration-300 ease-in-out hover:grayscale-0",
              images.indexOf(image) % 2 ? "hover:-rotate-6" : "hover:rotate-6",
            )}
          >
            <Image
              src={`/assets/svgs/platforms/transparent/${image}.svg`}
              alt={image}
              width={1}
              height={1}
              className="mx-10 h-16 w-16 rounded-md p-4 dark:bg-primary md:h-24 md:w-24"
            />
            <p>{image[0].toUpperCase() + image.slice(1)}</p>
          </div>
        ))}
      </Marquee>
    </MaxWidthWrapper>
  );
};

export default Slider;
