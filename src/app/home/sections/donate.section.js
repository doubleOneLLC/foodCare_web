import DonateItem from "@/components/donate-item";
import { donateMoneyList } from "@/models/donate_db";
import React from "react";

function DonateSection() {
  return (
    <div className="mt-[62px] px-6">
      <h1 className="font-bold text-3xl pr-12 px-4">Program Donasi Pilihan</h1>
      <div className="grid grid-flow-col overflow-x-scroll no-scrollbar py-6 gap-6">
        {donateMoneyList.map((item) => (
          <DonateItem
            key={item.id}
            img={item.img}
            program={item.program}
            instance={item.instance}
            acc={item.acc}
            target={item.target}
            verified={item.verified}
          />
        ))}
      </div>
    </div>
  );
}

export default DonateSection;
