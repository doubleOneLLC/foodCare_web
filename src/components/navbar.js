"use client";

import { jakarta } from "@/constant/fonts";
import React, { useState } from "react";
import MobileMenu from "./navbar-mobile";
import Link from "next/link";

function Navbar({ active }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-[24px]">
        <Link href="/" className="flex items-center">
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap text-primary `}
          >
            foodCare
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="hidden md:inline text-primary font-medium rounded-[99px] border-primary border-[1px] text-sm px-[35px] py-2 mx-2 text-center mr-3 md:mr-0"
          >
            Daftar
          </button>
          <button
            type="button"
            className="text-white bg-primary font-medium rounded-[99px] text-sm px-[35px] py-2 mx-2 text-center"
          >
            Masuk
          </button>
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center h-10 w-10 text-primary rounded-[99px] border-primary border-[1px] md:hidden"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-[99px] bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                Donasi
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </nav>
  );
}

export default Navbar;
