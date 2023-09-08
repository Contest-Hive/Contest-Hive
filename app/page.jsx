import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import Kontests from "@/components/Kontests";
import Features from "@/components/Features";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <NavBar />
      <Home />
      <Kontests />
      <Features />
      <Content />
      <Footer />
    </main>
  );
};

export default page;
