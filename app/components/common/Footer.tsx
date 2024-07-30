import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <p className="text-sm mr-1">
            &copy; 2024{" "}
            <a
              href="https://afghantaxcalculator.com/"
              className="font-semibold text-teal-400 hover:text-teal-300"
            >
              Afghan Tax Converter
            </a>
            . All rights reserved.
          </p>
          <div className="hidden md:block">
            {" "}
            {/* This will hide on mobile and show on medium and larger screens */}
            Powered by{" "}
            <a
              href="https://khaliddanishyar.com/"
              className="font-semibold text-teal-400 hover:text-teal-300"
            >
              Khalid Danishyar
            </a>
          </div>
          <div className="block md:hidden text-sm mt-2">
            {" "}
            {/* This will only be shown on mobile */}
            Powered by{" "}
            <a
              href="https://khaliddanishyar.com/"
              className="font-semibold text-teal-400 hover:text-teal-300"
            >
              Khalid Danishyar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
