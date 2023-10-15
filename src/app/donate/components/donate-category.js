import Image from "next/image";
import React from "react";

function DonateCategory({ logo, name, onCategoryClick, isActive }) {
  const handleClick = () => {
    onCategoryClick(name);
  };
  return (
    <div
      data-aos="zoom-in-up"
      onClick={handleClick}
      className="flex flex-col items-center"
    >
      <button
        className={`h-[94px] w-[94px] transition duration-150 ${
          isActive ? "bg-primary-4" : "bg-white"
        } rounded-[38px] shadow-xl flex justify-center items-center`}
      >
        <Image src={logo} width="38" height="38" alt={name} />
      </button>
      <h1
        className={`pt-4 font-semibold text-center text-base ${
          isActive ? "text-primary" : "text-black"
        }`}
      >
        {name}
      </h1>
    </div>
  );
}

export default DonateCategory;
