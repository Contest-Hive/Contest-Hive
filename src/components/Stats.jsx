import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import MaxWidthWrapper from "./MaxWidthWrapper";

import { formatNumber } from "@/lib/helpers";

const Stats = ({ statsData }) => {
  return (
    <MaxWidthWrapper>
      <header className="pb-8 pt-10 text-center font-heading  text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
        Why{" "}
        <span className="mr-1.5 rounded-lg bg-pinkish px-2 pb-1 text-secondary dark:text-primary">
          Contest Hive?
        </span>
      </header>
      <p className="mx-auto mb-10 max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        <span className="font-semibold tracking-tighter">Contest Hive</span>{" "}
        started its journey on{" "}
        <span className="font-semibold tracking-tighter">
          September 26, 2023.
        </span>
        <br />
        Since then, it has been gaining popularity rapidly.
        <br />
        <span className="text-sm text-muted-foreground md:text-base">
          The statistics below are a testament to that
        </span>
      </p>
      <div className="mx-auto mb-10 flex max-w-screen-md flex-col items-center justify-between gap-2 md:flex-row">
        {statsData.map((data, index) => (
          <Card key={index} className="w-full">
            <CardContent className="pb-4">
              <CardHeader className="py-3">
                <CardTitle className="font-bold">{data.title}</CardTitle>
              </CardHeader>
              <CardDescription className="flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold">
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger className="text-primary dark:text-secondary">
                        {formatNumber(data.value)}
                      </TooltipTrigger>
                      <TooltipContent className="tooltip-content font-bold">
                        {data.value.toLocaleString()}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
                <span className="text-sm text-muted-foreground">
                  {data.description}
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Stats;
