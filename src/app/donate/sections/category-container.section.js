import DonateItem from "@/components/donate-item";
import { donateFoodList } from "@/models/donate_food_db";
import React from "react";

function CategoryContainer() {
  return (
    <div className="md:pr-[32px]">
      <h1 className="font-bold text-3xl px-4 mb-4">Pilihan foodCare</h1>
      <div>
        <div className="grid md:grid-cols-3 py-6 gap-6">
          {donateFoodList
            .filter((item) => item.verified)
            .map((item) => (
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
      <h1 className="font-bold text-3xl px-4 mt-4">Donasi Makanan</h1>
      <div>
        <div className="grid md:grid-cols-3 py-6 gap-6">
          {donateFoodList.map((item) => (
            <DonateItem
              key={item.id}
              img={item.img}
              program={item.program}
              instance={item.instance}
              acc={item.acc}
              target={item.target}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
