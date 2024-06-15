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
    title: (
      <>
        Developer of{" "}
        <span className="font-mono font-semibold">this.website</span>
      </>
    ),
    description: (
      <>
        <span className="font-semibold tracking-tighter">Contest Hive</span> has
        made my life competitive programming life much easier. I don&apos;t need
        to worry about missing a contest again!
      </>
    ),
  },

  {
    name: "Random User",
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

function getCard(name, title, description) {
  return (
    <Card className="relative text-left" key={name}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent className="ml-3 mt-2 text-balance">
        <QuoteIcon className="absolute inset-0 left-6 top-20 rotate-180" />
        {description}
      </CardContent>
    </Card>
  );
}

const Testimonials = () => {
  return (
    <div className="pb-10">
      <header className="pb-8 pt-10 text-center font-heading text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
        Testimonials
        {/* <span className="mr-1.5 rounded-lg bg-pinkish px-2 pb-1 text-secondary dark:text-primary">
        </span> */}
      </header>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        {TESTAMENTS.map(({ name, title, description }) =>
          getCard(name, title, description),
        )}
      </div>
    </div>
  );
};

export default Testimonials;
