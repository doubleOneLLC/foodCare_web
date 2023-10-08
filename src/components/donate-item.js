import Image from "next/image";
import React from "react";

function DonateItem() {
  return (
    <div className="w-[250px] bg-white rounded-2xl shadow-md">
      <a href="#">
        <Image
          className="rounded-2xl object-cover h-[134px] w-[250px]"
          width="250"
          height="134"
          src="/assets/images/dummyPic.png"
          alt="img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
            Donasi Makanan Desa Tegalgondo
          </h5>
        </a>
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          Lazizmu Tlogomas
        </p>
      </div>
    </div>
  );
}

export default DonateItem;
