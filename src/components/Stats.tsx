import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResponsiveTooltip from "@/components/ui/responsiveTooltip";
import Highlight from "./typography/Highlight";

import Testimonials from "@/components/Testimonials";

import { getStatsData } from "@/lib/helpers/server";
import { formatNumber } from "@/lib/utils";

const Stats = async () => {
  const statsData = await getStatsData("page");
  return (
    <MaxWidthWrapper id="stats">
      <header className="mb-6 pb-2 pt-10 text-center font-heading text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
        Why<Highlight>Contest Hive</Highlight>
      </header>
      <p className="mx-auto mb-10 max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        <span className="font-semibold tracking-tighter">Contest Hive</span>{" "}
        started its journey on{" "}
        <span className="font-semibold tracking-tighter">
          September 26, 2023.
        </span>
        <br />
        Since then, it has been gaining popularity.
        <br />
        <span className="text-sm text-muted-foreground md:text-base">
          Here are some stats
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
                <span className="text-3xl font-extrabold text-primary">
                  <ResponsiveTooltip
                    content={data.value.toLocaleString()}
                    className="w-fit text-center font-bold"
                  >
                    {formatNumber(data.value)}
                  </ResponsiveTooltip>
                </span>
                <span className="text-sm text-muted-foreground">
                  {data.description}
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <Testimonials />
    </MaxWidthWrapper>
  );
};

export default Stats;
