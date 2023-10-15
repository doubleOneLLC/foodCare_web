"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import MobileMenu from "./navbar-mobile";

function Navbar({ active }) {
  const { data, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userData =
    status === "authenticated" ? data.user : { name: "", email: "" };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-[24px]">
        <Link href="/">
          <div className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
              foodCare
            </span>
          </div>
        </Link>

        <div className="flex md:order-2">
          {status === "unauthenticated" && (
            <button
              type="button"
              onClick={() => signIn()}
              className=" text-primary font-medium rounded-[99px] border-primary border-[1px] text-sm px-[35px] py-2 mx-2 text-center mr-3 hover:bg-primary hover:text-white md:mr-0"
            >
              Masuk
            </button>
          )}

          {status === "authenticated" && (
            <div className="hidden md:flex flex-row items-center bg-primary w-[100%] py-[8px] px-[11px] rounded-[24px] text-white">
              <div className="flex-grow">
                <h2 className="font-medium text-base md:ml-3 md:mr-7 text-left">
                  {userData.name}
                </h2>
              </div>
              <button
                onClick={() => signOut()}
                className="bg-white text-black text-sm font-medium rounded-full px-[24px] py-[8px]"
              >
                Sign Out
              </button>
            </div>
          )}

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
              <Link href="/">
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "/" ? "text-primary" : "text-gray-900"
                  } rounded md:bg-transparent md:hover:text-primary md:p-0`}
                >
                  Beranda
                </div>
              </Link>
            </li>

            <li>
              <Link href="/donate">
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "/donate" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0`}
                >
                  Donasi
                </div>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "/about" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0`}
                >
                  Tentang Kami
                </div>
              </Link>
            </li>

            <li>
              <Link href="/faq">
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "/faq" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0`}
                >
                  FAQ
                </div>
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
