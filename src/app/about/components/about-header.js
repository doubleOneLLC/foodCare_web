import Image from "next/image";
import React from "react";

function AboutHeader() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col-reverse md:flex-row bg-primary md:justify-between items-center w-[100%] my-[32px] px-[32px] md:px-[62px] py-[42px] pb-[100px] pt-[92px] mr-[18px] md:mx-0 rounded-[42px]"
    >
      <div>
        <h1
          data-aos="fade-up"
          className={`text-white text-4xl font-extrabold mb-2`}
        >
          Tentang foodCare
        </h1>
        <p data-aos="fade-up" className="text-white font-medium pr-42">
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
        data-aos="fade-up"
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
