import React from 'react'
import InputNominal from '../components/input-nominal';
import PaymenButton from '../components/payment-method';

function InputDetails() {
    return (
        <div className="flex flex-col gap-6 h-[771px] w-[676px] pt-4">
            <h1 className="text-black text-[32px] font-bold">Donasi Keuangan</h1>
            <InputNominal/>
            <p className="text-black text-2xl font-medium">Masukkan Metode <br></br>Pembayaran</p>
            <div className="grid grid-cols-2 gap-4 w-[100%]">
                <PaymenButton />
                <PaymenButton />
                <PaymenButton />
                <PaymenButton />
            </div>
            <div className="flex w-[100%] flex-row items-end gap-6">
                <input type="text" id="" className="bg-transparent border-2 border-slate-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5" placeholder="Nama Lengkap" />
                <input type="email" id="" className="bg-transparent border-2 border-slate-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5" placeholder="username@gmail.com" />
            </div>
            <textarea id="message" rows="4" className="block p-2.5 w-full h-[150px] resize-none text-sm text-gray-900 placeholder-gray-400 bg-transparent rounded-lg border-2 border-slate-300" placeholder="Tulis doa atau dukungan untuk penggalangan dana ini. "></textarea>
            <button className="middle none center w-full h-[60px] rounded-2xl bg-[#F7921C] py-3 px-6 text-base font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-grey-400">
                Kirim Donasi
            </button>
        </div>
    );
}

export default InputDetails;