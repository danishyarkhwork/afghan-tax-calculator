import React from "react";

const TaxCalculatorLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-teal-700 bg-opacity-90 z-50">
      <div className="flex items-center flex-col space-y-4">
        {/* Calculator Icon */}
        <svg
          className="w-20 h-20 text-teal-300 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16M4 11h16m-10 4h6m-6 4h6m-12-4h4m-4 4h4"
          ></path>
        </svg>

        {/* Text "Afghan Tax Calculator" */}
        <div className="text-2xl font-bold text-teal-300">
          Afghan Tax Calculator
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-1 text-teal-200">
          <span className="text-2xl font-mono animate-pulse">L</span>
          <span className="text-2xl font-mono animate-pulse delay-150">o</span>
          <span className="text-2xl font-mono animate-pulse delay-300">a</span>
          <span className="text-2xl font-mono animate-pulse delay-450">d</span>
          <span className="text-2xl font-mono animate-pulse delay-600">i</span>
          <span className="text-2xl font-mono animate-pulse delay-750">n</span>
          <span className="text-2xl font-mono animate-pulse delay-900">g</span>
          <span className="text-2xl font-mono animate-pulse delay-1050">.</span>
          <span className="text-2xl font-mono animate-pulse delay-1200">.</span>
          <span className="text-2xl font-mono animate-pulse delay-1350">.</span>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculatorLoader;
