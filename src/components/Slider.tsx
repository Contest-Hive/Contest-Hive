import Image from "next/image";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import { getPlatformLogoUrl } from "@/lib/helpers/others";
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
              priority
              src={getPlatformLogoUrl(image)}
              alt={image}
              width={1}
              height={1}
              className="h-8 w-8 rounded-md p-0.5 dark:bg-primary md:h-10 md:w-10 md:p-1"
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
