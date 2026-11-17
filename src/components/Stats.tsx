import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import ResponsiveTooltip from "@/components/ui/responsiveTooltip";
import Heading from "@/components/typography/Heading";
import Highlight from "@/components/typography/Highlight";
import Testimonials from "@/components/Testimonials";
import StatsCards from "./StatsCards";

const Stats = () => {
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
                <span className="text-xs md:px-5 text-balance">
                  Every refresh/request is counted, even the bot ones.
                  <br />
                  That&apos;s why it may seem very high to you. <code>:3</code>
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
      <StatsCards />
      <Testimonials />
    </MaxWidthWrapper>
  );
};

export default Stats;
