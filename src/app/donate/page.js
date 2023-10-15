"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import HeaderCategory from "./sections/header-category.section";
import CategoryContainer from "./sections/category-container.section";
import DonateActiveItem from "./components/donate-active-item";
import { activeDonate } from "@/constant/dummy.data";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [activeCategory, setActiveCategory] = useState("Donasi Makanan");

  return (
    <>
      <Navbar />
      <HeaderCategory
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div
        data-aos="fade-up"
        className="container flex flex-col-reverse md:flex-row max-w-screen-xl my-16 px-[32px]"
      >
        <CategoryContainer activeCategory={activeCategory} />
        <div data-aos="fade-up">
          <h1 className="font-bold text-3xl px-4 mb-4">Lacak donasi</h1>
          {activeDonate.map((item) => (
            <DonateActiveItem
              key={item.id}
              img={item.img}
              program={item.program}
              summary={item.summary}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
