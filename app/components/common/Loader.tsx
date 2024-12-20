import React from "react";

const TaxCalculatorLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50 bg-opacity-20 backdrop-blur-xl z-50">
      <div className="relative flex flex-col items-center space-y-6">
        {/* Calculator Icon */}
        <svg
          className="w-24 h-24 text-teal-300 animate-bounce"
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
        <div className="text-3xl font-bold text-teal-300">
          Afghan Tax Calculator
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-1 text-teal-200">
          {["L", "o", "a", "d", "i", "n", "g", ".", ".", "."].map(
            (char, index) => (
              <span
                key={index}
                className="text-2xl font-mono animate-pulse"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {char}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TaxCalculatorLoader;
