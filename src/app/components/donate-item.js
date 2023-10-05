import Image from "next/image";
import React from "react";

function DonateItem() {
  return (
    <div class="w-[250px] bg-white rounded-2xl shadow">
      <a href="#">
        <Image
          class="rounded-2xl object-cover h-[134px] w-[250px]"
          width="250"
          height="134"
          src="/assets/images/dummyPic.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-base font-semibold tracking-tight text-gray-900">
            Donasi Makanan Desa Tegalgondo
          </h5>
        </a>
        <p class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          Lazizmu Tlogomas
        </p>
      </div>
    </div>
  );
}

export default DonateItem;
