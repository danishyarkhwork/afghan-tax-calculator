"use client";

import React, { useState, useEffect, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./Loader";

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    const checkIfAppInstalled = () => {
      if (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone
      ) {
        setShowInstallButton(false);
      } else {
        setShowInstallButton(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    checkIfAppInstalled();
    window.addEventListener("appinstalled", checkIfAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", checkIfAppInstalled);
    };
  }, []);

  const handleNavigation = (url: string) => {
    setLoading(true);
    setIsMenuOpen(false);
    startTransition(() => {
      router.push(url);
      setLoading(false);
    });
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
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

          {showInstallButton && (
            <button
              onClick={handleInstallClick}
              className="bg-teal-700 md:hidden lg:hidden animate-bounce text-white py-1 px-4 rounded hover:bg-teal-600 transition duration-300"
            >
              INSTALL APP
            </button>
          )}

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
          {showInstallButton && (
            <button
              onClick={handleInstallClick}
              className="hidden md:block animate-pulse bg-teal-700 text-white py-1 px-4 rounded hover:bg-teal-600 transition duration-300"
            >
              INSTALL APP
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
