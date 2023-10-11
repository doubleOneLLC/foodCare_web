// components/InputNominal.js
"use client"
import React from 'react';

const maxLength = 10;

const maxLenghtCheck = (e) => {
  if (e.target.value.length > maxLength) {
    e.target.value = e.target.value.slice(0, maxLength);
  }
}
const InputNominal = () => {
  return (
    <div className="p-6 rounded-md w-[100%] h-20 flex items-center justify-between bg-gray-50">
      <p>Masukkan <br /> Nominal</p>
      {/* <p className="font-bold text-gray-900 text-4xl">Rp.<span className="focus:outline-none font-bold empty:before:content-[attr(placeholder)] inline hover:cursor-text" inputMode="numeric" maxLenght="{4}" placeholder="0" role="textbox" contentEditable></span>,-</p> */}
      <div className="inline w-auto">
        <span id="tpl" className="font-bold text-gray-900 text-4xl w-auto inline">Rp.
          <input id="nominal" className="font-bold text-gray-900 text-4xl w-[238px] bg-transparent border-transparent p-0 placeholder-gray-300 focus:bg-transparent focus:ring-transparent focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder='1.000.000.000' onInput={(e) => maxLenghtCheck(e)} maxLength={maxLength} type="number"></input>
          ,-</span>
      </div>
    </div>
  );
};

export default InputNominal;
