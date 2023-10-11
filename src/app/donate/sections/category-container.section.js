import DonateItem from "@/components/donate-item";
import React from "react";

function CategoryContainer() {
  return (
    <div className="md:pr-[32px]">
      <h1 className="font-bold text-3xl px-4 mb-4">Pilihan foodCare</h1>
      <div>
        <div className="grid md:grid-cols-3 py-6 gap-6">
          <DonateItem />
          <DonateItem />
          <DonateItem />
        </div>
      </div>
      <h1 className="font-bold text-3xl px-4 mt-4">Donasi Makanan</h1>
      <div>
        <div className="grid md:grid-cols-3 py-6 gap-6">
          <DonateItem />
          <DonateItem />
          <DonateItem />
          <DonateItem />
          <DonateItem />
          <DonateItem />
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
