// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Contest Hive",
  description:
    "Contest Hive is a platform that provides API for contest information from various competitive programming platforms.",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-300">
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default layout;
