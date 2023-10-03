import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Kontests from "@/components/Kontests";
import Stats from "@/components/Stats";
import AnimatedComponents from "@/components/AnimatedComponents";
import Footer from "@/components/Footer";
import StarInGithub from "@/components/StarInGithub";

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Kontests />
      <Stats />
      <StarInGithub />
      <AnimatedComponents />
      <Footer />
    </main>
  );
};

export default page;
