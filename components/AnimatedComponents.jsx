"use client";
import { useEffect } from "react";
import AOS from "@/others/applyAOS.js";
import "@/others/aos.css";

import Features from "@/components/Features";
import UserExperience from "@/components/UserExperience";
import Content from "@/components/Content";
import ContactUs from "@/components/ContactUs";

const AnimatedComponents = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 450,
    });
  }, []);

  return (
    <section>
      <Features />
      <UserExperience />
      <Content />
      <ContactUs />
    </section>
  );
};

export default AnimatedComponents;
