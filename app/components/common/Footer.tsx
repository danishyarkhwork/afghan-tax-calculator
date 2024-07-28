import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="container mx-auto bg-gray-800 text-white py-3 text-sm text-center mt-auto">
        <p>
          &copy; 2024
          <a
            href="https://afghantaxcalculator.com/"
            className="text-teal-400 hover:text-teal-200"
          >
            Afghan Tax Converter
          </a>
          . All rights reserved. Powered by
          <a
            href="https://khaliddanishyar.com/"
            className="text-teal-400 hover:text-teal-200"
          >
            Khalid Danishyar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
