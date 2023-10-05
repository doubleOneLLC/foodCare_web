import Image from "next/image";
import React from "react";

function AboutItem() {
  return (
    <div class="flex flex-col justify-center items-center w-[360px] h-[360px] bg-white rounded-[24px] shadow-md p-2 mt-[-120px]">
      <a href="#">
        <Image
          width="200"
          height="200"
          src="/assets/images/bag_ill.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-base text-center font-semibold tracking-tight text-gray-900">
          Donasi dengan Mudah
        </h5>
        <p class="mb-3 text-sm text-center font-medium text-gray-700 dark:text-gray-400">
          Anda dapat dengan mudah melakukan donasi dengan berbagai metode yang
          Anda inginkan. Dapat dilakukan dimana saja dan kapan saja
        </p>
      </div>
    </div>
  );
}

export default AboutItem;
