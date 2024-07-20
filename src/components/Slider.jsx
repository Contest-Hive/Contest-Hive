import Image from "next/image";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import { getPlatformLogo } from "@/lib/helpers/others";
import "@/styles/slider.css";

const images =
  "atcoder codeforces leetcode codechef toph hackerrank hackerearth".split(" ");

const Slider = () => {
  return (
    <MaxWidthWrapper className="mt-5 cursor-pointer select-none md:my-12">
      <div className="wrapper flex h-32 items-center justify-center py-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item item${index + 1} flex flex-col items-center justify-center font-semibold`}
          >
            <Image
              src={getPlatformLogo(image, true)}
              alt={image}
              width={1}
              height={1}
              className="mx-10 h-12 w-12 rounded-md p-2 dark:bg-primary md:mx-14 md:h-16 md:w-16"
            />
            <p className="mt-1.5 text-xs md:text-sm">
              {image[0].toUpperCase() + image.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Slider;
