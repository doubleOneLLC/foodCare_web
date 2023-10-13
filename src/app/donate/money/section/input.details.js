import React from "react";
import InputNominal from "../components/input-nominal";
import PaymenButton from "../components/payment-method";
import Link from "next/link";

function InputDetails() {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <InputNominal />
      <p className="text-black text-2xl font-medium">
        Masukkan Metode <br></br>Pembayaran
      </p>
      <div className="grid md:grid-cols-2 gap-4 w-[100%]">
        <PaymenButton method="OVO" />
        <PaymenButton method="GoPay" />
        <PaymenButton method="QRIS" />
        <PaymenButton method="VISA" />
      </div>
      <div className="flex w-[100%] flex-col md:flex-row items-end gap-6">
        <input
          type="text"
          id=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Nama Lengkap"
        />
        <input
          type="email"
          id=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Email"
        />
      </div>
      <textarea
        id="message"
        rows="4"
        className="block resize-none w-full p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        placeholder="Tulis doa atau dukungan untuk penggalangan dana ini. "
      ></textarea>
      <Link href="/donate/money/status-waiting">
        <button className="middle none center w-full h-[60px] rounded-2xl bg-[#F7921C] py-3 px-6 text-base font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-grey-400">
          Kirim Donasi
        </button>
      </Link>
    </div>
  );
}

export default InputDetails;
