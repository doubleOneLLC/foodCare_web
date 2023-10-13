import React from "react";
import Image from "next/image";
import Link from "next/link";

function PaymentWaiting() {
  return (
    <>
      <div className="flex flex-col gap-6 h-[70vh] md:w-[38vw] justify-center items-center">
        <p className=" text-2xl ">Cara Pembayaran</p>
        <p className=" text-sm text-slate-500">
          Transfer sesuai nominal di bawah ini
        </p>
        <p className=" text-[32px]">Rp.100.000,-</p>
        <p className=" text-sm text-slate-500">
          Ke Pembayaran <strong>GoPay Account</strong>
        </p>
        <div className="w-[326px] h-[50px] bg-[#F5F6F8] flex flex-row gap-5 justify-center items-center text-sm rounded-2xl">
          <div className="w-[28px] h-[28px]">
            <Image
              className="object-cover w-full h-full"
              src="/assets/svgs/method_GoPay.svg"
              height="28"
              width="28"
              alt="icon"
            />
          </div>
          <p>GoPay Account</p>
          <p className=" text-slate-300">6#####</p>
          <p>SALIN</p>
        </div>
        <div className=" flex w-[336px] h-fit border-2 rounded-2xl border-gray-300 p-4 items-center mt-9">
          <p className=" text-sm text-center text-gray-400">
            Transfer sebelum <strong>27 Oktober 2022 18:48</strong> atau donasi
            anda otomatis dibatalkan oleh sistem
          </p>
        </div>
        <Link href="/donate/money/status-complete">
          <button className=" mt-4 middle none center w-[332px] h-[60px] rounded-2xl bg-[#F7921C] py-3 px-6 text-base font-medium text-white shadow-md transition-all hover:shadow-lg hover:shadow-grey-400">
            Refresh Status
          </button>
        </Link>
      </div>
    </>
  );
}

export default PaymentWaiting;
