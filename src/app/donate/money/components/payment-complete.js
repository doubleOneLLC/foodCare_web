import React from "react";
import Image from "next/image";
import Link from "next/link";

function PaymentComplete() {
  return (
    <>
      <div className="flex flex-col gap-6 h-[70vh] md:w-[38vw] justify-center items-center text-center">
        <div className="w-[240px] md:w-[380px] md:h-[280px]">
          <Image
            className="object-cover w-fit h-fit"
            src="/assets/svgs/payment-complete.svg"
            height="280"
            width="380"
            alt="icon"
          />
        </div>
        <p className=" text-primary font-semibold text-2xl">
          Pembayaran Berhasil
        </p>
        <p className=" text-gray-500 text-sm w-60 -mt-6">
          <strong>Rp100.000,- </strong>berhasil dibayar. Terima kasih banyak
          atas donasi yang diberikan.
        </p>
        <Link href="/donate/">
          <button className=" middle none center w-[332px] h-[60px] rounded-2xl bg-[#F7921C] py-3 px-6 text-base font-medium text-white shadow-md transition-all hover:shadow-lg hover:shadow-grey-400">
            Selesai
          </button>
        </Link>
      </div>
    </>
  );
}

export default PaymentComplete;
