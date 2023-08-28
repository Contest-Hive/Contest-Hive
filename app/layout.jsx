import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
};

export default layout;
