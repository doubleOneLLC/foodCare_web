// components/InputNominal.js
"use client";
import React from "react";

const maxLength = 10;

const maxLenghtCheck = (e) => {
  if (e.target.value.length > maxLength) {
    e.target.value = e.target.value.slice(0, maxLength);
  }
};
const InputNominal = () => {
  return (
    <div className="p-6 rounded-[32px] w-[100%] flex flex-col justify-between bg-gray-50">
      <p className="md:mb-3">Masukkan Nominal</p>
      <div className="inline w-auto">
        <span
          id="tpl"
          className="font-bold text-gray-900 md:text-4xl text-3xl flex"
        >
          Rp.
          <input
            id="nominal"
            className="font-bold text-gray-900 md:text-4xl text-3xl  bg-transparent border-transparent p-0 placeholder-gray-300 focus:bg-transparent focus:ring-transparent focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="1.000.000"
            onInput={(e) => maxLenghtCheck(e)}
            maxLength={maxLength}
            type="number"
          ></input>
        </span>
      </div>
    </div>
  );
};

export default InputNominal;
