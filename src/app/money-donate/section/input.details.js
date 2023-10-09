import React from 'react'
import PaymentInput from '../components/payment-input';

function InputDetails() {
    return (
        <div className="flex flex-col gap-8 h-[771px] w-[676px] pt-4">
            <h1 className="text-black text-[32px] font-bold">Donasi Keuangan</h1>
            <input type="text" id="" placeholder="Masukkan Nominal (Rp)" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <p className="text-black text-2xl font-medium">Masukkan Metode <br></br>Pembayaran</p>
            <div className="grid grid-cols-2 gap-8 w-[100%]">
                <PaymentInput />
                <PaymentInput />
                <PaymentInput />
                <PaymentInput />
            </div>
            <div className="flex w-[100%] flex-row items-end gap-6 mt-6">
                    <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Lengkap" />
                    <input type="email" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" />
            </div>
            <textarea id="message" rows="4" className="block p-2.5 w-full h-[150px] resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis doa atau dukungan untuk penggalangan dana ini. "></textarea>
            <button className="middle none center w-full h-[60px] rounded-2xl bg-[#F7921C] py-3 px-6 text-base font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-grey-400">
                Kirim Donasi
            </button>
        </div>
    );
}

export default InputDetails;