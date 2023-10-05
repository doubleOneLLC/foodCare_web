"use client";

// React
import React from "react";

import Navbar from "@/app/components/navbar";
import HeroSection from "./sections/hero.section";
import Footer from "@/app/components/footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default HomePage;
