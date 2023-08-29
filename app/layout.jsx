import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-300">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
};

export default layout;
