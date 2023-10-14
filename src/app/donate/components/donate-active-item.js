import Image from "next/image";
import Link from "next/link";
import React from "react";

function DonateActiveItem({ img, program, summary }) {
  return (
    <Link href="/donate/food/track">
      <div className="w-[100%] bg-white shadow-xl rounded-[32px] mb-6">
        <div className="flex flex-row p-[22px] align-middle items-center">
          <div className="min-h-[67px] min-w-[67px] rounded-full overflow-hidden">
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
            <p className="font-medium text-sm text-gray-500">{summary}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DonateActiveItem;
