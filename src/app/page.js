"use client";

import HomePage from "./home/page";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="container max-w-screen-xl">
      <HomePage />
    </div>
  );
}
