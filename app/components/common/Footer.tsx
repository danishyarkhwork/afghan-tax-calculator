// src/components/common/Footer.tsx

import React from "react";
import Link from "next/link"; // Assuming you're using Next.js

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-8">
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About the Company */}
          <div>
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p className="text-sm">
              Afghan Tax Converter simplifies tax calculations for Afghan
              taxpayers, covering Salary Tax, Rental Tax, Contractors Tax,
              Business Tax, and Annual Tax, ensuring compliance with tax laws
              and avoiding penalties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/">
                  <span className="text-sm text-teal-400 hover:text-teal-300 cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/">
                  <span className="text-sm text-teal-400 hover:text-teal-300 cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions/">
                  <span className="text-sm text-teal-400 hover:text-teal-300 cursor-pointer">
                    Terms of Condition
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact/">
                  <span className="text-sm text-teal-400 hover:text-teal-300 cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p className="text-sm">Address: Kabul, Afghanistan</p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:support@afghantaxcalculator.com"
                className="text-teal-400 hover:text-teal-300"
              >
                support@afghantaxcalculator.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a
                href="tel:+93703325036"
                className="text-teal-400 hover:text-teal-300"
              >
                +93 70 332 5036
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {currentYear}{" "}
            <a
              href="https://afghantaxcalculator.com/"
              className="font-semibold text-teal-400 hover:text-teal-300"
            >
              Afghan Tax Converter
            </a>
            . All rights reserved.
          </p>
          <p className="text-sm mt-2">
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
