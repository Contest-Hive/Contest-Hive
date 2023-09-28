import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Kontests from "@/components/Kontests";
import AnimatedComponents from "@/components/AnimatedComponents";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Stats />
      <Kontests />
      <AnimatedComponents />
      <Footer />
    </main>
  );
};

export default page;
