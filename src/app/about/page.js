import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { poppins } from "@/constant/fonts";
import Image from "next/image";
import React from "react";
import AboutHeader from "./components/about-header";
import AboutItem from "./components/about-item";

export default function Home() {
  return (
    <div className="container max-w-screen-xl">
      <Navbar />
      <AboutHeader />
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-8">
          <AboutItem />
          <AboutItem />
          <AboutItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}
