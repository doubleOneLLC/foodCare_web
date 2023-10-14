import React from "react";
import Link from "next/link";
import Image from "next/image";
import FoodItem from "../components/food-item";

function InputDetails() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-4 w-[100%]"></div>
      <div>
        <label for="food">Nama Makanan</label>
        <input
          type="text"
          id="food"
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Nama Makanan"
        />
      </div>

      <div className="flex w-[100%] flex-col md:flex-row items-end gap-6">
        <div className="w-[100%]">
          <label for="pick">Tempat Pengambilan</label>
          <textarea
            id="pick"
            rows="4"
            className="mt-2 block resize-none w-full p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Masukkan Tempat Pengambilan"
          ></textarea>
        </div>

        <div className="w-[100%]">
          <label for="pick">Tempat Penjemputan</label>
          <textarea
            id="pick"
            rows="4"
            className="mt-2 block resize-none w-full p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Masukkan Tempat Penjemputan"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col">
        <label for="tglDonasi">Batas Tanggal Donasi</label>
        <input
          type="date"
          id="tglDonasi"
          name="tglDonasi"
          className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        />
      </div>
      <div className="flex flex-col">
        <label for="foodval">Kuantitas</label>
        <input
          id="minmax-range"
          type="range"
          min="0"
          max="10"
          className="range-slider mt-4 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointe"
        />
      </div>
      <div>
        <label className="text-ellipsi">Foto Makanan</label>
        <div className="grid grid-cols-3 w-fit gap-3">
          <FoodItem
            img={
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            }
          />
          <FoodItem
            img={
              "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
          />
          <FoodItem />
        </div>
      </div>

      <Link href="/donate/money/status-waiting">
        <button className="middle none center w-full h-[60px] rounded-[99px] bg-[#F7921C] py-3 px-6 text-base font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-grey-400">
          Kirim Donasi
        </button>
      </Link>
    </div>
  );
}

export default InputDetails;
