import React from "react";
import Link from "next/link";

const MobileMenu = ({ isOpen, toggleMenu }) => {
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
    </div>
  );
};

export default MobileMenu;
