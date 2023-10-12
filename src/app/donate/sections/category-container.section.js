import DonateItem from "@/components/donate-item";
import { donateFoodList, donateMoneyList } from "@/models/donate_db";
import React from "react";

function CategoryContainer({ activeCategory }) {
  let itemList;
  if (activeCategory === "Donasi Makanan") {
    itemList = donateFoodList;
  } else {
    itemList = donateMoneyList;
  }

  return (
    <div className="md:pr-[32px]">
      <h1 className="font-bold text-3xl px-4 mb-4">Pilihan foodCare</h1>
      <div>
        <div className="grid md:grid-cols-3 py-6 gap-6">
          {itemList
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
      <h1 className="font-bold text-3xl px-4 mt-4">{activeCategory}</h1>
      <div>
        <div className="grid md:grid-cols-3 py-6 gap-6">
          {itemList.map((item) => (
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
    </div>
  );
}

export default CategoryContainer;
