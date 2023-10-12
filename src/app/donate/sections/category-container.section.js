import DonateFoodItem from "@/components/donate-item-food";
import DonateMoneyItem from "@/components/donate-item-money";
import { donateFoodList, donateMoneyList } from "@/models/donate_db";
import React from "react";

function CategoryContainer({ activeCategory }) {
  const isFood = activeCategory === "Donasi Makanan";
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
        <div className="grid xl:grid-cols-3 md:grid-cols-2 py-6 gap-6">
          {itemList
            .filter((item) => item.verified)
            .map((item) =>
              isFood ? (
                <DonateFoodItem
                  key={item.id}
                  img={item.img}
                  program={item.program}
                  instance={item.instance}
                  acc={item.acc}
                  target={item.target}
                  dest={item.target}
                  verified={item.verified}
                  dateCreated={item.dateCreated}
                  dateExpired={item.dateExpired}
                />
              ) : (
                <DonateMoneyItem
                  key={item.id}
                  img={item.img}
                  program={item.program}
                  instance={item.instance}
                  acc={item.acc}
                  target={item.target}
                  verified={item.verified}
                />
              )
            )}
        </div>
      </div>
      <h1 className="font-bold text-3xl px-4 mt-4">{activeCategory}</h1>
      <div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 py-6 gap-6">
          {itemList.map((item) =>
            isFood ? (
              <DonateFoodItem
                key={item.id}
                img={item.img}
                program={item.program}
                instance={item.instance}
                acc={item.acc}
                target={item.target}
                dest={item.target}
                verified={item.verified}
                dateCreated={item.dateCreated}
                dateExpired={item.dateExpired}
              />
            ) : (
              <DonateMoneyItem
                key={item.id}
                img={item.img}
                program={item.program}
                instance={item.instance}
                acc={item.acc}
                target={item.target}
                verified={item.verified}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
