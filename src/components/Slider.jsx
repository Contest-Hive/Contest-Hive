import Image from "next/image";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import { getPlatformLogo } from "@/lib/helpers";

const images =
  "atcoder codeforces leetcode codechef toph hackerrank hackerearth".split(" ");

const Slider = () => {
  return (
    <MaxWidthWrapper className="wrapper cursor-pointer overflow-hidden">
      <div className="carousel relative flex h-36 select-none items-center py-3">
        {images.map((image) => (
          <div
            key={image}
            className="item flex flex-col items-center justify-center font-semibold grayscale transition-all duration-300 ease-in-out hover:rotate-6 hover:scale-105 hover:grayscale-0 odd:hover:-rotate-6"
          >
            <Image
              src={getPlatformLogo(image, true)}
              alt={image}
              width={1}
              height={1}
              className="mx-10 h-12 w-12 rounded-md p-2 dark:bg-primary md:mx-14 md:h-16 md:w-16"
            />
            <p className="md:text-sm text-xs mt-1.5">{image[0].toUpperCase() + image.slice(1)}</p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Slider;
