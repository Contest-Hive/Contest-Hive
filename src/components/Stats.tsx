import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResponsiveTooltip from "@/components/ui/responsiveTooltip";
import Heading from "@/components/typography/Heading";
import Highlight from "@/components/typography/Highlight";
import Testimonials from "@/components/Testimonials";

import { getStatsData } from "@/lib/helpers/server";
import { formatNumber } from "@/lib/utils";

const Stats = async () => {
  const statsData = await getStatsData("page");
  return (
    <MaxWidthWrapper id="stats">
      <div className="mx-auto my-5 max-w-screen-md rounded-3xl bg-muted/30 pb-2">
        <Heading level={2}>
          Why<Highlight>Contest Hive</Highlight>
        </Heading>
        <p className="mx-auto mb-3 max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
          <span className="font-semibold tracking-tighter">Contest Hive</span>{" "}
          started its journey on{" "}
          <span className="font-semibold tracking-tighter">
            September 26, 2023.
          </span>
          <br />
          Since then, it has been gaining popularity.
          <br />
          <span className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:text-base">
            Here are some stats and{" "}
            <ResponsiveTooltip
              content={
                <span>
                  Umm... So, the stats below are not{" "}
                  <i className="font-bold">incorrect or fake</i>. But, all of
                  them don&apos;t really represent actual human visits.
                  <br />
                  Because, even if a bot visits the site, it is counted in the
                  stats. <code>:3</code>
                </span>
              }
              className="mr-5 max-w-md text-balance px-2 py-5 text-center text-xs font-normal md:mr-0 md:max-w-lg md:text-sm"
              innerClassName="font-mono font-bold italic dark:text-blue-400 text-blue-500"
            >
              a secret
            </ResponsiveTooltip>
          </span>
        </p>
      </div>
      <div className="mx-auto mb-10 flex max-w-screen-md flex-col items-center justify-between gap-2 md:flex-row">
        {statsData.map((data, index) => (
          <Card key={index} className="w-full">
            <CardContent className="pb-4">
              <CardHeader className="py-3">
                <CardTitle className="font-bold text-primary/95">{data.title}</CardTitle>
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
