import React, { use, useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  let userData = {
    name: "",
    email: "",
  };

  let { data, status } = useSession();
  if (status === "authenticated") {
    userData = data.user;
  }

  return (
    <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
      <ul className="flex flex-col p-4 font-medium">
        <li>
          <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded" href="/">
            Beranda
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-900 rounded"
            href="/donate"
          >
            Donasi
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-900 rounded"
            href="/about"
          >
            Tentang Kami
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-900 rounded"
            href="/faq"
          >
            FAQ
          </Link>
        </li>
      </ul>
      <div className="mx-6 border-t border-gray-300" />
      <div className="p-[24px]">
        <div className="flex flex-row items-center bg-primary w-[100%] p-[18px] rounded-[24px] text-white">
          {/* <div className="bg-primary-4 rounded-full h-[48px] w-[48px] mr-4">
            <Image
              height="62"
              width="62"
              alt=""
              src={`${apiBase}${endStatic}/${userData.image}`}
            />
          </div> */}
          <div className="flex-grow">
            <h2 className="font-medium text-xl">{userData.name}</h2>
            <p className="font-light text-gray-100">{userData.email}</p>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-white text-black text-sm font-medium rounded-full px-[24px] py-[8px]"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
