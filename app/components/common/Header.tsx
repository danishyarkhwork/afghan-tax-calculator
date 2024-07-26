"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./Loader"; // Ensure the correct import path

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (url: string) => {
    setLoading(true);
    startTransition(() => {
      router.push(url).finally(() => setLoading(false));
    });
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {(loading || isPending) && <Loader />}
      <header className="bg-teal-950 w-full">
        <div className="container mx-auto p-4 flex items-center justify-between max-w-6xl">
          <button
            onClick={() => handleNavigation("/")}
            className={`text-2xl font-bold text-white ${
              isActive("/") ? "border-b-2 border-teal-300" : ""
            }`}
          >
            AFGHAN TAX CALCULATOR
          </button>
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
                <button
                  onClick={() => handleNavigation("/")}
                  className={`text-white hover:text-teal-300 py-1 px-4 transition duration-300 ${
                    isActive("/") ? "border-b-2 border-teal-300" : ""
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className={`text-white hover:text-teal-300 py-1 px-4 transition duration-300 ${
                    isActive("/about") ? "border-b-2 border-teal-300" : ""
                  }`}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/support-us")}
                  className={`text-white hover:text-teal-300 py-1 px-4 transition duration-300 ${
                    isActive("/support-us") ? "border-b-2 border-teal-300" : ""
                  }`}
                >
                  Support Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/how-to-use")}
                  className={`text-white hover:text-teal-300 py-1 px-4 transition duration-300 ${
                    isActive("/how-to-use") ? "border-b-2 border-teal-300" : ""
                  }`}
                >
                  How to Use?
                </button>
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
    </>
  );
};

export default Header;
