"use client";

import React, { useState, Suspense, lazy } from "react";

// Lazy load components
const SalaryTax = lazy(() => import("./components/home/SalaryTax"));
const RentalTax = lazy(() => import("./components/home/RentalTax"));
const ContractorsTax = lazy(() => import("./components/home/ContractorsTax"));
const BusinessReceiptsTax = lazy(
  () => import("./components/home/BusinessReceiptsTax")
);
const AnnualIncomeTax = lazy(() => import("./components/home/AnnualIncomeTax"));

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("salary");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "salary":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <SalaryTax />
          </Suspense>
        );
      case "rental":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <RentalTax />
          </Suspense>
        );
      case "contractors":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <ContractorsTax />
          </Suspense>
        );
      case "business":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <BusinessReceiptsTax />
          </Suspense>
        );
      case "annual":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <AnnualIncomeTax />
          </Suspense>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-teal-700 min-h-screen text-white">
      <main className="container mx-auto px-4 max-w-6xl py-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-center">
          Welcome to Free Online Afghan Tax Calculator
        </h2>

        <p className="text-lg text-center">
          AfghanTaxCalculator is a free online tool designed to simplify tax
          calculations for Afghan taxpayers, covering salary tax, rental tax,
          contractors tax, business receipts tax, and annual income tax. Users
          can input their financial details to get accurate computations,
          ensuring compliance with Afghan tax laws and avoiding penalties.
        </p>

        <div className="flex flex-wrap justify-center md:justify-center space-x-0 md:space-x-4 mb-6 mt-5">
          {["salary", "rental", "contractors", "business", "annual"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-4 py-2 md:text-xl mb-2 md:mb-0 border-b-2 ${
                  activeTab === tab ? "border-teal-300" : "border-transparent"
                } hover:border-teal-300 transition duration-300`}
              >
                <span role="img" aria-label={tab} className="mr-2">
                  {tab === "salary"
                    ? "💼"
                    : tab === "rental"
                    ? "🏠"
                    : tab === "contractors"
                    ? "🔨"
                    : tab === "business"
                    ? "📈"
                    : "📅"}
                </span>{" "}
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Tax
              </button>
            )
          )}
        </div>
        <div className="bg-gray-100 text-teal-950 p-6 rounded-lg shadow-md">
          {renderActiveTab()}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
