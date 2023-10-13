import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import DetailsDonate from "../section/details.donate";

import PaymentWaiting from "../components/payment-waiting";

export default function StatusWaiting() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto h-fit flex flex-row justify-center items-center gap-[78px] my-24">
        <div className="md:inline hidden">
          <DetailsDonate />
        </div>
        <div>
          <h1 className="inline-block md:hidden text-black text-[32px] ml-[-8px] mt-5 mb-[82px] font-bold">
            Donasi Keuangan
          </h1>
          <PaymentWaiting />
        </div>
      </div>
      <Footer />
    </>
  );
}
