import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "About Us",
  description: "Afghan Tax Calculator",
  keywords: ["Tax Calculator", "Afghan Tax", "Free Tax Calculator"],
  openGraph: {
    title: "About Us",
    description:
      "Welcome to AfghanTaxCalculator, your trusted partner in navigating the complexities of Afghan tax regulations.",
    type: "website",
    url: "https://afghantaxcalculator.com/",
  },
  icons: {
    icon: ".../public/icons/facvicon.ico",
  },
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-teal-700 min-h-screen text-white">
      <main className="container mx-auto p-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Us - Free Online Afghan Tax Calculator
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

        <h3 className="text-2xl font-semibold mb-4">Our Key Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold mb-3">💼 Salary Tax</h4>
            <p>
              Effortlessly calculate your salary tax with our intuitive tool.
              Input your income details, and our system will generate accurate
              salary tax computations, helping you understand your tax
              obligations and avoid any unexpected liabilities.
            </p>
          </div>
          <div className="bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold mb-3">🏠 Rental Tax</h4>
            <p>
              If you earn income from rental properties, our calculator
              simplifies the rental tax process. Enter your rental income and
              expenses, and receive a clear breakdown of the taxes you need to
              pay.
            </p>
          </div>
          <div className="bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold mb-3">🔨 Contractors Tax</h4>
            <p>
              Contractors can benefit from our specialized tax calculator
              designed to handle the unique aspects of contractor income. Ensure
              you meet all your tax obligations with ease by accurately
              calculating your contractor’s tax.
            </p>
          </div>
          <div className="bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold mb-3">
              📈 Business Receipts Tax
            </h4>
            <p>
              Managing business receipts and taxes can be complex. Our tool
              provides a straightforward solution for calculating business
              receipts tax, making it easier to keep track of your tax
              responsibilities and stay compliant with regulations.
            </p>
          </div>
          <div className="bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold mb-3">📅 Annual Income Tax</h4>
            <p>
              Simplify the process of calculating your annual income tax with
              our comprehensive tool. Whether you’re an individual or a business
              owner, our calculator helps you understand your total annual tax
              liability, ensuring you’re prepared for tax season.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg leading-relaxed">
          <li>
            <strong className="text-teal-300">User-Friendly Interface:</strong>{" "}
            Our tool is designed with you in mind. Enjoy a seamless experience
            with an easy-to-navigate interface.
          </li>
          <li>
            <strong className="text-teal-300">Accuracy Guaranteed:</strong> Rely
            on precise and up-to-date calculations based on current Afghan tax
            laws.
          </li>
          <li>
            <strong className="text-teal-300">Free to Use:</strong> Access our
            comprehensive tax calculator at no cost, with no hidden fees or
            charges.
          </li>
        </ul>

        <p className="text-lg leading-relaxed">
          At AfghanTaxCalculator, we’re committed to helping you manage your
          taxes with confidence. Whether you're handling personal or business
          taxes, our free online tool is here to assist you every step of the
          way. Stay informed, stay compliant, and avoid penalties with ease.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Thank you for choosing AfghanTaxCalculator. We're here to simplify
          your tax calculations and support you in meeting your tax obligations.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
