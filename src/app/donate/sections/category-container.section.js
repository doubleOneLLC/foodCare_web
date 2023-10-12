import DonateFoodItem from "@/components/donate-item-food";
import DonateMoneyItem from "@/components/donate-item-money";
import { apiBase, endFood } from "@/constant/api";
import { donateMoneyList } from "@/models/donate_db";
import React, { useEffect, useState } from "react";

function CategoryContainer({ activeCategory }) {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiBase + endFood);
        const data = await response.json();
        setFoodData(data.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchData();
  }, []);

  const isFood = activeCategory === "Donasi Makanan";
  let itemList;
  if (activeCategory === "Donasi Makanan") {
    itemList = foodData;
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
