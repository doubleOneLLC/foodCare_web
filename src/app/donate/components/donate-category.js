import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

<<<<<<< HEAD
function DonateCategory({ logo, name, link }) {
  return (
    <Link href={`${link}`}>
      <div className="flex flex-col justify-center items-center">
        <div className="h-[94px] w-[94px] bg-white rounded-[38px] shadow-xl flex justify-center items-center">
          <Image src={logo} width="38" height="38" alt={name} />
        </div>
        <h1 className="pt-4 font-semibold text-base">{name}</h1>
      </div>
    </Link>
=======
function DonateCategory({ logo, name, onCategoryClick, isActive }) {
  const handleClick = () => {
    onCategoryClick(name);
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center items-center"
    >
      <div
        className={`h-[94px] w-[94px] ${
          isActive ? "bg-primary-4" : "bg-white"
        } rounded-[38px] shadow-xl flex justify-center items-center`}
      >
        <Image src={logo} width="38" height="38" alt={name} />
      </div>
      <h1
        className={`pt-4 font-semibold text-center text-base ${
          isActive ? "text-primary" : "text-black"
        }`}
      >
        {name}
      </h1>
    </div>
>>>>>>> main
  );
}

export default DonateCategory;
