"use client";
import { useEffect } from "react";
import AOS from "@/others/applyAOS.js";
import "@/others/aos.css";

const AnimatedComponents = () => {
  useEffect(() => {
    {
      AOS.init({});
    }
  });
  return (
    <>
      <Features />
      <UserExperience />
      <Content />
      <ContactUs />
    </>
  );
};

export default AnimatedComponents;
