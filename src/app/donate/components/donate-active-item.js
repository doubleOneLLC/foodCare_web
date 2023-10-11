import Image from "next/image";
import React from "react";

function DonateActiveItem({ img, program, summary }) {
  return (
    <div className="w-[100%] bg-white shadow-xl rounded-[32px] mb-6">
      <div className="flex flex-row p-[22px] align-middle items-center">
        <div className="h-[67px] w-[67px] rounded-full bg-black overflow-hidden">
          <Image
            className="object-cover h-[67px] w-[67px]"
            width="67"
            height="67"
            src={img}
            alt="loahdohsalodho"
          />
        </div>
        <div className="px-4">
          <h2 className="font-bold text-base">{program}</h2>
          <p className="font-medium text-lg text-gray-500">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default DonateActiveItem;
