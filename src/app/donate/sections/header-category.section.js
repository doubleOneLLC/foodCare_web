import React from "react";
import DonateCategory from "../components/donate-category";
import Image from "next/image";
import Link from "next/link";

function HeaderCategory({ setActiveCategory, activeCategory }) {
  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <div
      data-aos="fade-up"
      className="container mx-auto flex flex-col justify-center items-center mt-[92px]"
    >
      <div className="min-h-[240px] max-h-[320px] rounded-3xl bg-black overflow-hidden">
        <Image
          className="object-cover brightness-50"
          src="/assets/images/donateBanner.jpg"
          height="393"
          width="1212"
          alt="banner"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[-12.5rem] md:mt-[-9rem] z-10">
        <h1
          data-aos="zoom-in-up"
          className="text-3xl md:text-4xl font-semibold text-center text-white mb-2 px-4"
        >
          Mau Bantu Apa Hari Ini?
        </h1>
        <p
          data-aos="zoom-in-up"
          className="text-base font-semibold text-center text-gray-200 mb-6 px-4"
        >
          Pilih dan salurkan donasi untuk program yang berarti bagi anda dan
          mereka
        </p>
        <div className="grid grid-cols-3 md:gap-6 mx-4">
          <DonateCategory
            logo="/assets/svgs/donate-food.svg"
            name="Donasi Makanan"
            isActive={activeCategory === "Donasi Makanan"}
            onCategoryClick={handleCategoryClick}
          />
          <DonateCategory
            logo="/assets/svgs/donate-uang.svg"
            name="Donasi Uang"
            isActive={activeCategory === "Donasi Uang"}
            onCategoryClick={handleCategoryClick}
          />
          <Link href="/donate/create">
            <DonateCategory
              logo="/assets/svgs/donate-create.svg"
              name="Buat Donasi"
              onCategoryClick={handleCategoryClick}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderCategory;
