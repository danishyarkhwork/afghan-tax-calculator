"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-teal-950 w-full">
      <div className="container mx-auto p-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="text-2xl font-bold text-white">
          AFGHAN TAX CALCULATOR
        </Link>
        <button
          id="menu-toggle"
          className="text-white focus:outline-none block md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <nav className="hidden md:flex md:items-center space-x-4">
          <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <li>
              <Link
                href="/"
                className={`text-white hover:text-teal-300 py-1 px-4 transition duration-300 ${
                  isActive("/") ? "border-b-2 border-teal-300" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-white hover:text-teal-300 py-1 px-4 transition duration-300 ${
                  isActive("/about") ? "border-b-2 border-teal-300" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/support-us"
                className={`text-white hover:text-teal-300 py-1 px-4 transition duration-300 ${
                  isActive("/support-us") ? "border-b-2 border-teal-300" : ""
                }`}
              >
                Support Us
              </Link>
            </li>
            <li>
              <Link
                href="/how-to-use"
                className={`text-white hover:text-teal-300 py-1 px-4 transition duration-300 ${
                  isActive("/how-to-use") ? "border-b-2 border-teal-300" : ""
                }`}
              >
                How to Use?
              </Link>
            </li>
            <li className="md:hidden">
              <a
                href="#"
                className="bg-teal-700 text-white py-1 px-4 rounded hover:bg-teal-600 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#"
          className="hidden md:block bg-teal-700 text-white py-1 px-4 rounded hover:bg-teal-600 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
