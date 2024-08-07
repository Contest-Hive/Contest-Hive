import Stats from "./Stats";
import Contact from "./Contact";
import Footer from "./Footer";

import { getAllContestData } from "@/lib/helpers/server";
import CompressedContestTable from "./CompressedContestTable";
import Hero from "./Hero";
import NavBar from "./Navbar";

const HomePage = async () => {
  const contests = await getAllContestData();
  return (
    <>
      <NavBar />
      <Hero />
      <CompressedContestTable contestData={contests} />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
