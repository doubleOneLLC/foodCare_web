import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import DetailsDonate from "../section/details.donate";
import PaymentComplete from "../components/payment-complete";

export default function StatusWaiting() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto h-fit flex flex-row justify-center gap-[78px] my-24">
        <div className="md:inline hidden">
          <DetailsDonate />
        </div>
        <div>
          <h1 className="inline-block md:hidden text-black text-[32px] ml-4 mt-5 mb-[42px] font-bold">
            Donasi Keuangan
          </h1>
          <PaymentComplete />
        </div>
      </div>
      <Footer />
    </>
  );
}
