"use client";

import React, { useState } from "react";
import RootLayout from "./layout";
import SalaryTax from "./components/home/SalaryTax";
import RentalTax from "./components/home/RentalTax";
import ContractorsTax from "./components/home/ContractorsTax";
import BusinessReceiptsTax from "./components/home/BusinessReceiptsTax";
import AnnualIncomeTax from "./components/home/AnnualIncomeTax";

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("salary");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "salary":
        return <SalaryTax />;
      case "rental":
        return <RentalTax />;
      case "contractors":
        return <ContractorsTax />;
      case "business":
        return <BusinessReceiptsTax />;
      case "annual":
        return <AnnualIncomeTax />;
      default:
        return null;
    }
  };

  return (
    <RootLayout>
      <div className="bg-slate-400 min-h-screen text-white">
        <main className="container mx-auto px-4 max-w-6xl py-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
            Welcome to Afghan Tax Calculator
          </h2>
          <p className=" mb-2">
            AfghanTaxCalculator is a free online tool designed to simplify tax
            calculations for Afghan taxpayers, covering salary tax, rental tax,
            contractors tax, business receipts tax, and annual income tax. Users
            can input their financial details to get accurate computations,
            ensuring compliance with Afghan tax laws and avoiding penalties. The
            tool offers specific calculators for each tax type: Salary Tax for
            employees, Rental Tax for landlords, Contractors Tax for
            self-employed individuals, Business Receipts Tax for business
            owners, and Annual Income Tax for an overall yearly tax overview.
            AfghanTaxCalculator is an essential resource for effective tax
            management in Afghanistan.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-4 mb-6 mt-5">
            <button
              onClick={() => setActiveTab("salary")}
              className={`flex items-center px-4 py-2 mb-2 md:mb-0 border-b-2 ${
                activeTab === "salary"
                  ? "border-teal-300"
                  : "border-transparent"
              } hover:border-teal-300 transition duration-300`}
            >
              <span role="img" aria-label="salary" className="mr-2">
                💼
              </span>{" "}
              Salary Tax
            </button>
            <button
              onClick={() => setActiveTab("rental")}
              className={`flex items-center px-4 py-2 mb-2 md:mb-0 border-b-2 ${
                activeTab === "rental"
                  ? "border-teal-300"
                  : "border-transparent"
              } hover:border-teal-300 transition duration-300`}
            >
              <span role="img" aria-label="rental" className="mr-2">
                🏠
              </span>{" "}
              Rental Tax
            </button>
            <button
              onClick={() => setActiveTab("contractors")}
              className={`flex items-center px-4 py-2 mb-2 md:mb-0 border-b-2 ${
                activeTab === "contractors"
                  ? "border-teal-300"
                  : "border-transparent"
              } hover:border-teal-300 transition duration-300`}
            >
              <span role="img" aria-label="contractors" className="mr-2">
                🔨
              </span>{" "}
              Contractors Tax
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`flex items-center px-4 py-2 mb-2 md:mb-0 border-b-2 ${
                activeTab === "business"
                  ? "border-teal-300"
                  : "border-transparent"
              } hover:border-teal-300 transition duration-300`}
            >
              <span role="img" aria-label="business" className="mr-2">
                📈
              </span>{" "}
              Business Receipts Tax
            </button>
            <button
              onClick={() => setActiveTab("annual")}
              className={`flex items-center px-4 py-2 mb-2 md:mb-0 border-b-2 ${
                activeTab === "annual"
                  ? "border-teal-300"
                  : "border-transparent"
              } hover:border-teal-300 transition duration-300`}
            >
              <span role="img" aria-label="annual-income" className="mr-2">
                📅
              </span>{" "}
              Annual Income Tax
            </button>
          </div>
          <div className="bg-gray-100 text-teal-950 p-6 rounded-lg shadow-md">
            {renderActiveTab()}
          </div>
        </main>
      </div>
    </RootLayout>
  );
};

export default HomePage;
