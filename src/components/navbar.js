import { jakarta } from "@/constant/fonts";
import React from "react";

function Navbar({ active }) {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-[24px]">
        <a href="/" className="flex items-center">
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap text-primary ${jakarta.className}`}
          >
            foodCare
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="hidden md:visible text-primary font-medium rounded-[99px] border-primary border-[1px] text-sm px-[35px] py-2 mx-2 text-center mr-3 md:mr-0"
          >
            Daftar
          </button>
          <button
            type="button"
            className="text-white bg-primary font-medium rounded-[99px] text-sm px-[35px] py-2 mx-2 text-center"
          >
            Masuk
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-[99px] bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/donate"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                Donasi
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
