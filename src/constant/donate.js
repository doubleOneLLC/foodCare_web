import { donateFoodList, donateMoneyList } from "@/models/donate_db";

export const donateCategories = [
  {
    title: "Donasi Makanan",
    items: donateFoodList,
  },
  {
    title: "Donasi Uang",
    items: donateMoneyList,
  },
];
