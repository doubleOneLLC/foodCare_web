import React from "react";

function Target() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col w-[90%] h-[122px] bg-[#F7921C] rounded-xl py-4 px-4 gap-5"
      >
        <div className="flex flex-row justify-between items-center gap-3  w-[100%]">
          <div className=" bg-[#FFCE95] rounded-full h-1.5 w-[60%]">
            <div className="w-[45%] bg-white h-1.5 rounded-full"></div>
          </div>
          <p className="text-center text-white text-base font-semibold">
            21/30 Hari
          </p>
        </div>
        <div className="w-[100%] h-[50%] flex flex-row justify-between">
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-white text-xs font-normal">
              Terkumpul
            </p>
            <p className="text-center text-white text-sm font-semibold">
              Rp. 20.000,00
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-white text-xs font-normat">
              Terkumpul
            </p>
            <p className="text-center text-white text-sm font-semibold">
              Rp. 20.000,00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Target;
