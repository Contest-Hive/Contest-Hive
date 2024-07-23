import FocusedPage from "./FocusedPage";
import Stats from "./Stats";
import Contact from "./Contact";
import Footer from "./Footer";

import { getAllContestData } from "@/lib/helpers/server";

const HomePage = async () => {
  const contests = await getAllContestData();
  return (
    <>
      <FocusedPage contestData={contests} />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
