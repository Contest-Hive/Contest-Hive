import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { QuoteIcon } from "lucide-react";

const TESTAMENTS = [
  {
    name: "Nusab Taha",
    image: "/assets/images/min/me.jpg",
    title: (
      <>
        Developer of{" "}
        <span className="font-mono font-semibold">this.website</span>
      </>
    ),
    description: (
      <>
        <span className="font-semibold tracking-tighter">Contest Hive</span> has
        saved me a ton of time. What would have taken me hours, now just takes a
        minute!
      </>
    ),
  },

  {
    name: "Random User",
    image: "/assets/images/min/beluga.jpg",
    title: (
      <>
        Potential Engineer @{" "}
        <span className="font-mono font-semibold">Google</span>
      </>
    ),
    description: (
      <>
        I have been using{" "}
        <span className="font-semibold tracking-tighter">Contest Hive</span> for
        couple of months now. I think every competitive programmer should give
        it a try.
      </>
    ),
  },
];

function getCard({
  name,
  title,
  description,
  image,
}: {
  name: string;
  title: JSX.Element | string;
  description: JSX.Element | string;
  image: string;
}) {
  return (
    <Card className="relative text-left" key={name}>
      <CardHeader>
        <div className="flex items-center justify-start gap-2">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="text-xs md:text-sm">
              {title}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="ml-3 mt-2 text-balance">
        <QuoteIcon className="absolute inset-0 left-6 top-20 rotate-180" />
        {description}
      </CardContent>
    </Card>
  );
}

const Testimonials = async () => {
  return (
    <div className="pb-10">
      <header className="pb-8 pt-10 text-center font-heading text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
        Testimonials
        {/* <span className="mr-1.5 rounded-lg bg-pinkish dark:bg-blueish px-2 pb-1 text-secondary dark:text-primary">
        </span> */}
      </header>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        {TESTAMENTS.map((i) => getCard(i))}
      </div>
    </div>
  );
};

export default Testimonials;
