import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Afghan Tax Calculator",
  keywords: [
    "Tax Calculator",
    "Afghan Tax",
    "Free Tax Calculator",
    "Salary Tax",
  ],
  openGraph: {
    title: "Terms and Conditions",
    description:
      "Welcome to AfghanTaxCalculator, your trusted partner in navigating the complexities of Afghan tax regulations.",
    type: "website",
    url: "https://afghantaxcalculator.com/terms-and-conditions/",
  },
  icons: {
    icon: ".../public/icons/favicon.ico",
  },
};

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-teal-700 min-h-screen text-white">
      <main className="container mx-auto p-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Terms and Conditions
        </h2>

        <p className="mb-6 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-bold text-teal-300">AfghanTaxCalculator</span>,
          your trusted partner in navigating the complexities of Afghan tax
          regulations. Our platform is dedicated to providing you with a
          seamless and accurate tax calculation experience, ensuring you stay
          compliant with Afghan tax laws without the stress.
        </p>

        <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
        <p className="mb-6 text-lg leading-relaxed">
          At AfghanTaxCalculator, we understand the challenges of managing
          taxes, whether you're an individual taxpayer or a business owner.
          That's why we've developed a comprehensive,{" "}
          <strong className="text-teal-300">free online tool</strong> designed
          to simplify and streamline the process of tax calculation. Our goal is
          to make your tax experience as straightforward as possible by
          providing precise computations for a variety of tax types.
        </p>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;
