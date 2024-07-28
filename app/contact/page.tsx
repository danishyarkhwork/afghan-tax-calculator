// app/contact/page.tsx
import React from "react";
import RootLayout from "../layout";

const ContactPage: React.FC = () => {
  return (
    <RootLayout>
      <div className="bg-teal-700 min-h-screen text-white">
        <main className="container mx-auto p-4 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
            Conact Us
          </h2>
          <p className="text-lg mb-2">
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
        </main>
      </div>
    </RootLayout>
  );
};

export default ContactPage;
