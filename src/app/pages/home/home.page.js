"use client";

// React
import React from "react";

import Navbar from "@/app/components/navbar";
import HeroSection from "./sections/hero.section";
import Footer from "@/app/components/footer";
import MotivateSection from "./sections/motivate.section";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MotivateSection />
      <Footer />
    </>
  );
}

export default HomePage;
