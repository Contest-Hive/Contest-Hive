import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import NavBar from "@/components/Navbar";
import ImageCards from "./components/imageCards";
import Footer from "@/components/Footer";
import { getStatsData } from "@/lib/helpers/server";

const Credits = async () => {
  const statsData = await getStatsData("page");
  return (
    <>
      <NavBar />
      <MaxWidthWrapper className="py-10 text-start">
        <header className="mb-5 text-3xl font-bold tracking-tighter md:text-4xl lg:text-6xl">
          Credits & Thanks
        </header>
        <p className="text-balance text-sm md:text-lg">
          Wherever <b>Contest Hive</b> has reached today, it&apos;s all because
          of these people. So, here&apos;s to the ones who made it possible.
        </p>
        <ImageCards />
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default Credits;
