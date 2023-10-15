import { jakarta } from "@/constant/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function HeroSection() {
  const [totalDonation, setTotalDonation] = useState(0);
  const [totalProgram, setTotalProgram] = useState(0);
  const [totalRegister, setTotalRegister] = useState(0);
  const stopValue = 31462218610;
  const stopTotalProgram = 32;
  const stopTotalRegister = 47672;

  useEffect(() => {
    const interval = setInterval(() => {
      const incrementValue = Math.floor(Math.random() * 112946834);

      if (totalDonation + incrementValue >= stopValue) {
        setTotalDonation(stopValue);
        clearInterval(interval);
      } else {
        setTotalDonation((prevCounter) => prevCounter + incrementValue);
      }
    });

    return () => clearInterval(interval);
  }, [totalDonation, stopValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      const incrementValue = 1;

      if (totalProgram + incrementValue >= stopTotalProgram) {
        setTotalProgram(stopTotalProgram);
        clearInterval(interval);
      } else {
        setTotalProgram((prevCounter) => prevCounter + incrementValue);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [totalProgram, stopTotalProgram]);

  useEffect(() => {
    const interval = setInterval(() => {
      const incrementValue = Math.floor(Math.random() * 200);

      if (totalRegister + incrementValue >= stopTotalRegister) {
        setTotalRegister(stopTotalRegister);
        clearInterval(interval);
      } else {
        setTotalRegister((prevCounter) => prevCounter + incrementValue);
      }
    });

    return () => clearInterval(interval);
  }, [totalRegister, stopTotalRegister]);

  return (
    <div
      data-aos="fade-up"
      className="container mt-32 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-start h-[80vh] md:h-[40vh] px-[32px] md:flex-row md:items-center">
        <Image
          className="w-[114px] md:w-[233px] md:h-[201px]"
          width="233"
          height="201"
          alt="foodCare"
          src="assets/svgs/foodcare_logo.svg"
        />
        <div data-aos="fade-right" className="md:ml-[100px] ">
          <h1
            className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary text-[72px] pt-8 pr-20 md:pt-0 md:text-5xl `}
          >
            with Food, we Care
          </h1>
          <p className="mb-6 text-lg font-normal text-black">
            Anak Indonesia Harus Merdeka Kelaparan
          </p>
          <Link href="/donate">
            <div className="inline-flex items-center justify-center px-[37px] py-[13px] text-lg font-extrabold text-center text-white bg-primary rounded-[99px]">
              Mulai Donasi
            </div>
          </Link>
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        className="grid gap-[32px] md:grid-cols-3 bg-primary justify-center items-center md:h-[271px] w-[100%] my-[18px] py-20 pb-[180px] md:px-[42px] rounded-[42px]"
      >
        <div className="flex flex-col items-center md:mt-[-42px]">
          <h5 className="mb-4 text-xl font-semibold leading-none tracking-tight text-white">
            Program Donasi
          </h5>
          <p className="text-white text-3xl font-extrabold">{totalProgram}</p>
        </div>
        <div className="flex flex-col items-center md:mt-[-42px]">
          <h5 className="mb-4 text-xl font-semibold leading-none tracking-tight text-white">
            Total Dana Terkumpul
          </h5>
          <p className="text-white text-3xl font-extrabold">
            {"Rp "}
            {totalDonation.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex flex-col items-center md:mt-[-42px]">
          <h5 className="mb-4 text-xl font-semibold leading-none tracking-tight text-white">
            Donatur Terdaftar
          </h5>
          <p className="text-white text-3xl font-extrabold">{totalRegister}</p>
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        className="flex flex-col bg-white justify-center items-center mx-[24px] md:mx-[42px] mt-[-150px] rounded-[42px] shadow-xl p-[32px] py-[42px] md:p-[52px]"
      >
        <div className="flex flex-col md:flex-row items-center">
          <h5
            className={`text-4xl font-extrabold leading-none tracking-tight text-primary `}
          >
            Anak Indonesia Harus Merdeka Kelaparan
          </h5>
          <p className="text-black text-base font-medium pt-8 md:pt-0 md:pl-16">
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
