"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import DetailsDonate from "./section/details.donate";
import InputDetails from "./section/input.details";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function FoodDonate() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div
        data-aos="fade-up"
        className="container mx-auto h-fit flex flex-col md:flex-row justify-center gap-5 md:gap-[78px] my-24 overflow-hidden"
      >
        <DetailsDonate />
        <div className="flex flex-col justify-center px-[32px] md:px-0">
          <h1 className="hidden md:block text-black text-[32px] font-bold">
            Donasi Makanan
          </h1>
          <InputDetails />
        </div>
      </div>
      <Footer />
    </>
  );
}
