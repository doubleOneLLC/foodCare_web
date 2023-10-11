import React from "react";
import DonateCategory from "../components/donate-category";
import Image from "next/image";

function HeaderCategory() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-[92px]">
      <div className="max-h-[320px] rounded-3xl bg-black overflow-hidden">
        <Image
          className="object-cover brightness-50"
          src="/assets/images/donateBanner.jpg"
          height="393"
          width="1212"
          alt="banner"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[-12.5rem] md:mt-[-9rem] z-10">
        <h1 className="text-4xl font-semibold text-center text-white mb-2">
          Mau Bantu Apa Hari Ini?
        </h1>
        <p className="text-base font-semibold text-center text-gray-200 mb-6">
          Pilih dan salurkan donasi untuk program yang berarti bagi anda dan
          mereka
        </p>
        <div className="grid grid-cols-3 md:gap-6 mx-4">
          <DonateCategory
            logo="/assets/svgs/donate-food.svg"
            name="Donasi Makanan"
          />
          <DonateCategory
            logo="/assets/svgs/donate-uang.svg"
            name="Donasi Uang"
          />
          <DonateCategory
            logo="/assets/svgs/donate-create.svg"
            name="Buat Donasi"
            link="donate/create"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderCategory;
