import { ExternalLink } from "lucide-react";

const DATA = [
  {
    title: "Contest Hive",
    mobile: 100,
    desktop: 100,
    link: "",
  },
  {
    title: "StopStalk",
    mobile: 99,
    desktop: 100,
    link: "",
  },
  {
    title: "Kontests",
    mobile: 99,
    desktop: 100,
    link: "",
  },
];

const PerformanceScore = () => {
  return (
    <section className="my-5">
      <header className="mb-5 w-fit scroll-m-20 border-b pb-2 pr-1 text-xl font-bold tracking-tighter first:mt-0 md:text-2xl lg:text-3xl">
        Performance
      </header>
      <p className="text-balance text-sm md:text-lg">
        See the{" "}
        <a
          href="https://pagespeed.web.dev/"
          title="PageSpeed insights by Google"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-8"
        >
          PageSpeed Insights
        </a>{" "}
        by Google:
      </p>
      <ul className="ml-6 mt-4 list-disc text-xs md:ml-10 md:text-base">
        {DATA.map((item, index) => (
          <li key={index} className="mb-1">
            <a href={item.link} className="underline-offset-4 hover:underline">
              <b>{item.title}</b> scored{" "}
              <code className="font-semibold">{item.mobile}</code> on mobile and{" "}
              <code className="font-semibold">{item.desktop}</code> on desktop
              <ExternalLink className="-mt-1 ml-1 inline-block h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PerformanceScore;
