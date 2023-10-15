"use client";
import { formatRupiah } from "@/utils/formatRp.utils";
import React, { useState } from "react";

const InputNominal = () => {
  const [donateVal, setDonateVal] = useState("");

  const handleInputChange = (e) => {
    const formattedValue = formatRupiah(e.target.value, "Rp. ");
    setDonateVal(formattedValue);
  };

  return (
    <div className="p-6 rounded-[32px] w-[100%] flex flex-col justify-between bg-gray-50">
      <p className="md:mb-3 font-medium">Masukkan Nominal</p>
      <div className="inline w-auto">
        <input
          type="text"
          id="nominal"
          className="font-bold text-gray-900 md:text-4xl text-3xl  bg-transparent border-transparent p-0 placeholder-gray-300 focus:bg-transparent focus:ring-transparent focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="Rp"
          maxLength="16"
          value={donateVal}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default InputNominal;
