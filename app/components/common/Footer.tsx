import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
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
          <p className="text-sm">
            Powered by{" "}
            <a
              href="https://khaliddanishyar.com/"
              className="font-semibold text-teal-400 hover:text-teal-300"
            >
              Khalid Danishyar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
