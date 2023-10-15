import React from "react";
import Image from "next/image";
import Description from "../components/description";
import Target from "../components/target";
import Avatar from "@/components/avatar";

function DetailsDonate() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:mb-6 md:w-[382px] rounded-[42px] md:shadow-lg px-[28px] gap-4"
    >
      <h1 className="md:hidden text-black text-[24px] text-start font-bold">
        Donasi Makanan
      </h1>
      <div className="w-[100%] h-[128px] rounded-2xl overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src="/assets/images/detailsBanner.png"
          height="128"
          width="330"
          alt="banner"
        />
      </div>
      <div className="flex flex-row justify-start items-center gap-3  w-[100%]">
        <div className="w-[34px] h-[34px] rounded-full overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/assets/images/detailsBanner.png"
            height="34"
            width="34"
            alt="banner"
          />
        </div>
        <p className="text-zinc-900 font-bold">Donasi Makanan Desa Kami</p>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col w-[100%] h-[168px] bg-[#F5F6F8] rounded-[22px] p-6"
      >
        <p className="text-zinc-900 text-sm font-semibold">
          Bantu Atasi Kelaparan Sekitar
        </p>
        <div className="flex flex-row h-[24px] justify-start items-center gap-3 ">
          <div className="flex flex-row h-[100%] w-max -space-x-2 ">
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
          <p className="text-neutral-400 text-xs font-semibold">
            100+ orang berdonasi
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col h-auto mt-[-100px] gap-4 items-center"
      >
        <Target />
        <Description />
        <div className="w-[100%] h-[160] rounded-xl overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/assets/images/googlemaps.png"
            height="160"
            width="300"
            alt="map"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsDonate;
