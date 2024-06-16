import { useRef, useEffect } from "react";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

import "@/styles/slider.css";

const images =
  "atcoder codeforces leetcode codechef toph hackerrank hackerearth".split(" ");

const Slider = () => {
  return (
    <MaxWidthWrapper className="cursor-pointer">
      <div className="wrapper h-36 select-none py-3">
        {images.map((image) => (
          <div
            key={image}
            className="item flex flex-col items-center justify-center font-semibold grayscale transition-all duration-300 ease-in-out hover:rotate-6 hover:scale-105 hover:grayscale-0 odd:hover:-rotate-6"
          >
            <Image
              src={`/assets/svgs/platforms/transparent/${image}.svg`}
              alt={image}
              width={1}
              height={1}
              className="mx-10 h-16 w-16 rounded-md p-4 dark:bg-primary md:mx-14 md:h-24 md:w-24"
            />
            <p>{image[0].toUpperCase() + image.slice(1)}</p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Slider;
