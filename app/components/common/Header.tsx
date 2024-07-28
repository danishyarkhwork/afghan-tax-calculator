"use client";

import React, { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./Loader";

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (url: string) => {
    setLoading(true);
    setIsMenuOpen(false); // Close mobile menu on navigation
    startTransition(() => {
      router.push(url);
      setLoading(false); // This will execute immediately after starting the transition
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
            className="md:text-2xl font-bold text-white xl:text-2xl text-xl"
          >
            AFGHAN TAX CALCULATOR
          </button>

          <a
            href="#"
            className="bg-teal-700 animate-bounce md:hidden lg:hidden text-white py-1 px-4 rounded hover:bg-teal-600 transition duration-300"
          >
            INSTALL APP
          </a>

          <button
            id="menu-toggle"
            className="text-white focus:outline-none block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center space-x-4`}
          >
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
            </ul>
          </nav>
          <a
            href="#"
            className="hidden md:block animate-pulse bg-teal-700 text-white py-1 px-4 rounded hover:bg-teal-600 transition duration-300"
          >
            INSTALL APP
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
