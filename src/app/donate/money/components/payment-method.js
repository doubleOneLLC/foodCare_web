import Image from "next/image";
import React from "react";

function PaymenButton({ method }) {
  return (
    <button
      type="button"
      className=" h-[50px] text-gray-900 bg-white hover:bg-primary focus:bg-primary focus:text-white hover:text-white border border-gray-200 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
    >
      <Image
        className="mr-3"
        width="36"
        height="36"
        src={`/assets/svgs/method_${method}.svg`}
      />
      {method}
    </button>
  );
}

export default PaymenButton;
