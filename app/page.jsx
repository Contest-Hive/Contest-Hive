import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Kontests from "@/components/Kontests";
import Features from "@/components/Features";
import UserExperience from "@/components/UserExperience";
import Content from "@/components/Content";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Kontests />
      <Features />
      <UserExperience />
      <Content />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
