import { jakarta } from "@/constant/fonts";
import React from "react";

function MotivateSection() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col-reverse md:flex-row bg-primary justify-center items-center w-[100%] my-[32px] px-[32px] md:px-[62px] py-[42px] rounded-[42px]"
    >
      <p data-aos="fade-up" className="text-white font-medium">
        foodCare menjadi tempat bagi setiap hati yang ingin membuat perubahan,
        baik sponsor, donor, maupun setiap individu dan lembaga yang bersatu
        untuk membuat perubahan yang berkesinambungan. Bersama kami mengatasi
        akar dari masalah kelaparan, dengan menerapkan program donasi makanan
        kepada yang membutuhkan.
      </p>
      <h1
        data-aos="fade-up"
        className={`text-white pb-6 md:pb-0 md:text-right text-5xl font-extrabold `}
      >
        Sedikit memberi banyak membantu
      </h1>
    </div>
  );
}

export default MotivateSection;
