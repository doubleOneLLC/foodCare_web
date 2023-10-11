import DonateItem from "@/components/donate-item";
import React from "react";

function DonateSection() {
  return (
    <div className="mt-[62px] px-6">
      <h1 className="font-bold text-3xl pr-12 px-4">Program Donasi Pilihan</h1>
      <div className="grid grid-flow-col overflow-x-scroll no-scrollbar py-6 gap-6">
        <DonateItem />
        <DonateItem />
        <DonateItem />
        <DonateItem />
        <DonateItem />
        <DonateItem />
        <DonateItem />
      </div>
    </div>
  );
}

export default DonateSection;
