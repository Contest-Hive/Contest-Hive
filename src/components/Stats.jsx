import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MaxWidthWrapper from "./MaxWidthWrapper";

async function getData() {
  const response = await fetch(
    "https://contest-hive.vercel.app/api/others/stats",
    {
      next: 30,
    },
  );
  const data = await response.json();
  return [
    {
      title: "Today",
      value: data.past24,
      description: "visited",
    },
    {
      title: "Total served",
      value: data.api,
      description: "API requests",
    },
    {
      title: "Total",
      value: data.page,
      description: "visits",
    },
  ];
}

const Stats = async () => {
  const DATA = await getData();
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
        started it&apos;s journey on{" "}
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
        {DATA.map((data, index) => (
          <Card key={index} className="w-full">
            <CardContent className="pb-4">
              <CardHeader className="py-3">
                <CardTitle className="font-bold">{data.title}</CardTitle>
              </CardHeader>
              <CardDescription className="flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold">{data.value}</span>
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
