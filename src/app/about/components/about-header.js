import { jakarta } from "@/constant/fonts";
import Image from "next/image";
import React from "react";

function AboutHeader() {
  return (
    <div className="flex flex-row bg-gradient-to-r from-amber-500 to-white justify-between items-center w-[100%] my-[32px] px-[62px] py-[42px] pb-[100px] mt-[92px] rounded-[42px]">
      <div>
        <h1
          className={`text-white text-4xl font-extrabold mb-2 ${jakarta.className}`}
        >
          Tentang foodCare
        </h1>
        <p className="text-white font-medium pr-42">
          foodCare merupakan situs web yang dibuat khusus untuk berdonasi
          makanan atau uang bagi masyarakat yang memiliki kemampuan finansial
          terbatas. Food care bekerja untuk membantu para donatur yang ingin
          menyumbangkan makanan berlebih mereka secara sukarela kepada
          masyarakat membutuhkan makanan yang cukup sebagai sumber protein dan
          nutrisi mereka. Dengan hal tersebut, diharapkan dapat mengakhiri
          kelaparan dan mencapai ketahanan pangan.
        </p>
      </div>
      <Image
        src="/assets/svgs/foodcare_logo.svg"
        height="303"
        width="303"
        alt="foodCare"
        className="mx-[50px]"
      />
    </div>
  );
}

export default AboutHeader;
