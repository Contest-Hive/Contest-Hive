import Stats from "./Stats";
import Contact from "./Contact";
import Footer from "./Footer";

import ContestSection from "./ContestSection";
import Hero from "./Hero";
import NavBar from "./Navbar";


const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ContestSection />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
