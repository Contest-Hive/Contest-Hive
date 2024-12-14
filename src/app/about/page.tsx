import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import NavBar from "@/components/Navbar";
import FAQ from "@/app/about/components/FAQ";
import WhyUs from "@/app/about/components/WhyUs";
import Footer from "@/components/Footer";
import { getStatsData } from "@/lib/helpers/server";

const About = async () => {
  const statsData = await getStatsData("page");
  return (
    <>
      <NavBar />
      <MaxWidthWrapper className="py-10 text-start">
        <header className="mb-5 text-3xl font-bold tracking-tighter md:text-4xl lg:text-6xl">
          About Contest Hive
        </header>
        <p className="text-balance text-sm md:text-lg">
          <b>Contest Hive</b> started as a hobby project to gather all the
          contests happening around the internet in one place.
          <br className="md:hidden" />
          <br />
          But as time passed, I realized that it can be a great tool for people
          who are looking for contests to participate in.
          <br />
          <br />
          So, I started working on it more seriously and after
          <span className="font-mono text-xs font-semibold tracking-tight text-primary/70 md:text-sm">
            (GOD knows how many)
          </span>
          sleepless nights, here we are.
          <br />
          Now I&apos;ll answer some of the questions you might have.
        </p>
        <FAQ />
        <WhyUs />
        {/* <PerformanceScore /> */}
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default About;
