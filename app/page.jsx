import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Kontests from "@/components/Kontests";
import Stats from "@/components/Stats";
import StarInGithub from "@/components/StarInGithub";
import Features from "@/components/Features";
import UserExperience from "@/components/UserExperience";
import Content from "@/components/Content";
import ContactUs from "@/components/ContactUs";

import Footer from "@/components/Footer";

// style css for Animation on Scroll 
import "@/others/aos.css";


const page = () => {
  return (
    <main className="overflow-x-hidden leading-relaxed tracking-wider md:text-lg">
      <NavBar />
      <Hero />
      <Kontests />
      <Stats />
      <Features />
      <UserExperience />
      <Content />
      <StarInGithub />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
