"use client";

// React
import React from "react";

import HeroSection from "./sections/hero.section";
import MotivateSection from "./sections/motivate.section";
import DonateSection from "./sections/donate.section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DonateSection />
      <MotivateSection />
      <Footer />
    </>
  );
}

export default HomePage;
