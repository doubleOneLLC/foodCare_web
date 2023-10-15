import Image from "next/image";
import React from "react";

function MapView({ openModal }) {
  return (
    <div className="flex align-middle h-screen md:h-auto w-screen md:w-auto justify-center relative overflow-hidden md:min-h-0 min-h-[680px] md:min-w-[550px] md:rounded-[32px]">
      <Image
        className="object-cover mt-[48px] md:mt-0"
        height="744"
        width="550"
        alt="maps"
        src="/assets/images/track_map.png"
      />
      <div
        data-aos="zoom-in-up"
        className="flex flex-col absolute bottom-0 m-[18px] md:m-0 md:w-[90%] md:mb-[32px] p-[32px] rounded-[32px] bg-white"
      >
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col gap-2 mr-3">
            <div className="h-[42px] w-[42px] bg-black rounded-full"></div>
            <div>
              <h2 className="font-bold">Jody Yuantoro</h2>
              <p className="font-semibold text-xs text-gray-500">Kurir</p>
            </div>
          </div>
          <div className="flex flex-col">
            <ol className="relative border-l ml-6 border-gray-200">
              <li className="ml-6 mb-[32px]">
                <span className="absolute flex items-center justify-center w-[38px] h-[38px] bg-primary-4 rounded-full -left-[20px] ring-8 ring-white">
                  <Image
                    className="w-[18px] h-[18px]"
                    width="32"
                    height="32"
                    alt="location"
                    src="/assets/svgs/track_clock.svg"
                  />
                </span>
                <div className="ml-3">
                  <h3 className="mb-1 text-xs font-semibold text-gray-400">
                    Waktu Penjemputan
                  </h3>
                  <p className="mb-2 font-semibold leading-none">15 minutes</p>
                </div>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-[38px] h-[38px] bg-primary-4 rounded-full -left-[20px] ring-8 ring-white">
                  <Image
                    className="w-[18px] h-[18px]"
                    width="32"
                    height="32"
                    alt="location"
                    src="/assets/svgs/track_location.svg"
                  />
                </span>
                <div className="ml-3">
                  <h3 className="mb-1 text-xs font-semibold text-gray-400">
                    Alamat Tujuan
                  </h3>
                  <p className="mb-2 font-semibold leading-none">
                    Jl. Tlogomas No. 343
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="text-white w-[100%] font-medium rounded-[99px] bg-primary text-sm px-[35px] mt-6 py-4 text-center"
          >
            Detail Donasi
          </button>
          <button
            type="button"
            onClick={openModal}
            className="inline-block md:hidden text-white w-[100%] font-medium rounded-[99px] bg-primary text-sm px-[35px] mt-6 py-4 text-center"
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default MapView;
