import DonateItem from "@/components/donate-item";
import React from "react";

function DonateSection() {
  return (
    <div className="my-[62px]">
      <h1 className="font-bold text-2xl px-4">Program Donasi Pilihan</h1>
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
