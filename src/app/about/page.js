"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useEffect } from "react";
import AboutSection from "./sections/about.section";
import TeamSection from "./sections/team.section";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="container max-w-screen-xl">
      <Navbar />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
