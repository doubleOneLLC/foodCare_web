"use client";

// React
import React from "react";

// Utils
import useIsMobile from "@/app/utils/isMobile.hook";
import Navbar from "@/app/components/navbar";

function HomePage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Navbar />
    </>
  );
}

export default HomePage;
