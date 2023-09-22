import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Kontests from "@/components/Kontests";
import Features from "@/components/Features";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

import UserExperience from "@/components/UserExperience";

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Kontests />
      <Features />
      <UserExperience />
      <Content />
      <Footer />
    </main>
  );
};

export default page;
