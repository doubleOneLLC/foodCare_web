import Image from "next/image";
import Link from "next/link";
import React from "react";

function DonateItem() {
  return (
    <div className="min-w-[250px] bg-white rounded-2xl shadow-md">
      <Link href="/donate/money">
        <Image
          className="rounded-2xl object-cover h-[134px] w-[250px]"
          width="250"
          height="134"
          src="/assets/images/dummyPic.png"
          alt="img"
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
          Donasi Makanan Desa Tegalgondo
        </h5>
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          Lazizmu Tlogomas
        </p>
      </div>
    </div>
  );
}

export default DonateItem;
