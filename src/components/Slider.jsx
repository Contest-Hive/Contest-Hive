import Image from "next/image";
import Marquee from "react-fast-marquee";

const images =
  "atcoder codeforces leetcode codechef toph hackerrank hackerearth".split(" ");

const Slider = () => {
  return (
    <Marquee autoFill>
      {images.map((image) => (
        <div key={image} className="flex items-center flex-col justify-center font-semibold">
          <Image
            src={`/assets/svgs/platforms/transparent/${image}.svg`}
            alt={image}
            width={1}
            height={1}
            className="mx-2 h-24 w-24 rounded-md p-4 dark:bg-primary"
          />
          <p>{image[0].toUpperCase()+image.slice(1)}</p>
        </div>
      ))}
    </Marquee>
  );
};

export default Slider;
