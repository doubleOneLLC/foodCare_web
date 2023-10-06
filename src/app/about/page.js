import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import AboutSection from "./sections/about.section";
import TeamSection from "./sections/team.section";

export default function Home() {
  return (
    <div className="container max-w-screen-xl">
      <Navbar />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
