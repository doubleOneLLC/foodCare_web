"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import { formatRupiah } from "@/utils/formatRp.utils";
export default function Home() {
  const [donateVal, setDonateVal] = useState("");

  const handleInputChange = (e) => {
    const formattedValue = formatRupiah(e.target.value, "Rp. ");
    setDonateVal(formattedValue);
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-screen-md mt-32 mb-8 overflow-hidden">
        <div className="gap-12 grid md:grid-cols-1 px-[32px]">
          <h1 className="font-bold text-3xl">Buat Donasi</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <label
                  for="full_name"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                >
                  Nama Penyalur
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Masukan Nama Anda"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  for="subject"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                >
                  Deskripsi Donasi
                </label>
                <textarea
                  id="story"
                  name="story"
                  rows="5"
                  className="resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Masukan Deskripsi Donasi Anda"
                  cols="33"
                />
              </div>
              <div className="flex flex-col grid-cols-2 mt-[20px]">
                <h3 className="block text-sm font-bold text-gray-900 dark:text-white">
                  Jenis Donasi
                </h3>
                <div className=" flex items-center justify-between ">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div>
                      <input
                        type="checkbox"
                        id="foodDonate"
                        name="foodDonate"
                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:primary dark:ring-offset-gray-800 focus:ring-2"
                      />
                      <label
                        for="foodDonate"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Donasi Makanan
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="moneyDonate"
                        name="moneyDonate"
                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:primary dark:ring-offset-gray-800 focus:ring-2"
                      />
                      <label
                        for="moneyDonate"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Donasi Uang
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <div className="w-[100%] flex-col flex gap-4">
                  <div className="flex flex-col">
                    <label
                      for="tglDonasi"
                      className="block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Batas Tanggal Donasi
                    </label>
                    <input
                      type="date"
                      id="tglDonasi"
                      name="tglDonasi"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      for="donateVal"
                      className="block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Jumlah Nominal
                    </label>
                    <input
                      type="text"
                      id="donateVal"
                      name="donateVal"
                      className="mt-2 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="Rp"
                      value={donateVal}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="text-white font-medium rounded-[99px] bg-primary text-sm px-[35px] py-4 text-center">
            Buat Donasi
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
