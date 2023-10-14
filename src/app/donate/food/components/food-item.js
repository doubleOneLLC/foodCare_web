import Image from "next/image";
import React from "react";

function FoodItem({ img }) {
  return (
    <div className="mt-3 h-[92px] w-[92px] md:h-[128px] md:w-[128px] overflow-hidden rounded-xl">
      {img ? (
        <Image
          className="h-[128px] w-[100%]"
          width="128"
          height="128"
          alt="img"
          src={img}
        />
      ) : (
        <div className="flex h-[100%] items-center justify-center content-center border-dotted border-[3px]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5 8C25.5 7.17157 24.8284 6.5 24 6.5C23.1716 6.5 22.5 7.17157 22.5 8L22.5 22.5H8C7.17157 22.5 6.5 23.1716 6.5 24C6.5 24.8284 7.17157 25.5 8 25.5H22.5V40C22.5 40.8284 23.1716 41.5 24 41.5C24.8284 41.5 25.5 40.8284 25.5 40V25.5H40C40.8284 25.5 41.5 24.8284 41.5 24C41.5 23.1716 40.8284 22.5 40 22.5H25.5L25.5 8Z"
              fill="#F7921C"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default FoodItem;
