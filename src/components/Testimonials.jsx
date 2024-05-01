import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { QuoteIcon } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="pb-10">
      <header className="pb-8 pt-10 text-center font-heading text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
        Testimonials
        {/* <span className="mr-1.5 rounded-lg bg-pinkish px-2 pb-1 text-secondary dark:text-primary">
        </span> */}
      </header>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <Card className="relative text-left">
          <CardHeader>
            <CardTitle className="">John Wick</CardTitle>
            <CardDescription>
              Designer @{" "}
              <span className="font-mono font-semibold">!this.website</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="ml-3 text-balance">
            <QuoteIcon className="absolute inset-0 left-2 top-20 rotate-180" />
            <span className="font-semibold tracking-tighter">
              Contest Hive
            </span>{" "}
            has made my life competitive programming life much easier. I
            don&apos;t need to worry about missing a contest again!
          </CardContent>
        </Card>

        <Card className="relative text-left">
          <CardHeader>
            <CardTitle className="">Christopher Nolan</CardTitle>
            <CardDescription>Competitive Programmer</CardDescription>
          </CardHeader>
          <CardContent className="ml-3 text-balance">
            <QuoteIcon className="absolute inset-0 left-2 top-20 rotate-180" />I
            have been using{" "}
            <span className="font-semibold tracking-tighter">Contest Hive</span>{" "}
            for couple of months now. I think every competitive programmer
            should give it a try.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;
