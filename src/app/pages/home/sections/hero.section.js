import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row items-center">
        <Image
          width="233"
          height="201"
          alt="foodCare"
          src="assets/svgs/foodcare_logo.svg"
        />
        <div className="ml-[100px]">
          <h1 className="mb-4 text-4xl font-poppins font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
            with Food, we Care
          </h1>
          <p className="mb-6 text-lg font-normal text-black">
            Anak Indonesia Harus Merdeka Kelaparan
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-[37px] py-[13px] text-xl font-extrabold text-center text-white bg-primary rounded-[99px]"
          >
            Mulai Donasi
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 bg-primary justify-center items-center h-[271px] w-[100%] my-[32px] px-[42px] rounded-[42px]">
        <div className="flex flex-col items-center mt-[-98px]">
          <h5 className="mb-4 text-xl font-semibold leading-none tracking-tight text-white">
            Program Donasi
          </h5>
          <p className="text-white text-4xl font-extrabold">32</p>
        </div>
        <div className="flex flex-col items-center mt-[-98px]">
          <h5 className="mb-4 text-xl font-semibold leading-none tracking-tight text-white">
            Total Dana Terkumpul
          </h5>
          <p className="text-white text-4xl font-extrabold">
            Rp 31.462.218.610
          </p>
        </div>
        <div className="flex flex-col items-center mt-[-98px]">
          <h5 className="mb-4 text-xl font-semibold leading-none tracking-tight text-white">
            Donatur Terdaftar
          </h5>
          <p className="text-white text-4xl font-extrabold">47672</p>
        </div>
      </div>

      <div className="flex flex-col bg-white justify-center items-center h-[277px] w-[85%] my-[-150px] rounded-[42px] shadow-xl px-16">
        <div className="flex flex-row items-center">
          <h5 className="text-4xl font-extrabold leading-none tracking-tight text-primary">
            Anak Indonesia Harus Merdeka Kelaparan
          </h5>
          <p className="text-black text-base font-medium pl-16">
            foodCare merupakan situs web yang dibuat khusus untuk berdonasi
            makanan atau uang bagi masyarakat yang memiliki kemampuan finansial
            terbatas. Food care bekerja untuk membantu para donatur yang ingin
            menyumbangkan makanan berlebih mereka secara sukarela kepada
            masyarakat membutuhkan makanan yang cukup sebagai sumber protein dan
            nutrisi mereka. Dengan hal tersebut, diharapkan dapat mengakhiri
            kelaparan dan mencapai ketahanan pangan.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
