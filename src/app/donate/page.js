import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import HeaderCategory from "./sections/header-category.section";
import CategoryContainer from "./sections/category-container.section";
import DonateActiveItem from "./components/donate-active-item";

function Home() {
  const donationItems = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1548102268-3d7dc56b01e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
      program: "Donasi Makanan Desa Kami",
      summary: "Lazizmu Batu",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      program: "Donasi Makanan Desa Tegalgondo",
      summary: "Yayasan Abi Berkah",
    },
  ];

  return (
    <>
      <Navbar />
      <HeaderCategory />
      <div className="container flex flex-row max-w-screen-xl my-16">
        <CategoryContainer />
        <div>
          <h1 className="font-bold text-3xl px-4 mb-4">Lacak donasi</h1>
          {donationItems.map((item) => (
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
