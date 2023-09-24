"use client";
import { useEffect } from "react";
import AOS from "@/others/applyAOS.js";
import "@/others/aos.css";

const Animate = () => {
  useEffect(() => {
    {
      AOS.init({});
    }
  });
  return (
    <div data-aos="fade-up-right" className="h-32 w-32 bg-blue-500">
      Hello World
    </div>
  );
};

export default Animate;
