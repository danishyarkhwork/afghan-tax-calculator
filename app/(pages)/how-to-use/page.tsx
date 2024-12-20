import React from "react";

const HowToUsePage: React.FC = () => {
  return (
    <div className="bg-slate-100 min-h-screen text-gray-900">
      <main className="container mx-auto p-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
          How to Use the Tool?
        </h2>

        <p className="mb-6 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-bold text-teal-300">AfghanTaxCalculator</span>!
          Our tool is designed to help you navigate Afghan tax regulations with
          ease. Follow this guide to make the most of our platform:
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black">
          Getting Started
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          To get started, simply visit our homepage and select the type of tax
          you need to calculate. We offer tools for various tax categories,
          including salary tax, rental tax, and more. Choose the relevant
          category to begin.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black">
          Step-by-Step Instructions
        </h3>
        <div className="space-y-6">
          {[
            {
              step: "1. Select Your Tax Category",
              description:
                "On the main page, you’ll see different tax categories. Click on the one that matches your needs. For example, if you want to calculate salary tax, select the 'Salary Tax' option.",
            },
            {
              step: "2. Enter Your Details",
              description:
                "Fill out the required fields with your financial information. This may include income details, expenses, or other relevant data depending on the tax category you've chosen.",
            },
            {
              step: "3. Review Your Results",
              description:
                "Once you’ve entered all necessary details, click the 'Calculate' button. Our tool will process your information and provide you with an accurate tax calculation based on current Afghan tax laws.",
            },
            {
              step: "4. Save or Print Your Results",
              description:
                "After reviewing your results, you can save them for future reference or print them directly from our tool. Use the provided options to download or print your tax calculations.",
            },
          ].map((instruction, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h4 className="text-xl font-semibold mb-3 text-black">
                {instruction.step}
              </h4>
              <p className="text-gray-800">{instruction.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-black">
          Tips for Accurate Calculations
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg leading-relaxed">
          <li>
            <strong className="text-teal-300">
              Double-Check Your Entries:
            </strong>{" "}
            Ensure all entered information is accurate to avoid errors in your
            tax calculations.
          </li>
          <li>
            <strong className="text-teal-300">Consult a Professional:</strong>{" "}
            For complex tax situations, consider consulting with a tax
            professional to ensure compliance and accuracy.
          </li>
          <li>
            <strong className="text-teal-300">Stay Updated:</strong> Keep up
            with any changes in Afghan tax laws that may affect your
            calculations.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-black">
          Need Assistance?
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          If you have any questions or need help using our tool, feel free to
          reach out to our support team. We're here to assist you with any
          issues or queries you might have.
        </p>
        <p className="text-lg leading-relaxed">
          Contact us at{" "}
          <a
            href="mailto:info@khaliddanishyar.com"
            className="text-teal-300 hover:text-teal-400 transition-colors"
          >
            info@khaliddanishyar.com
          </a>{" "}
          for prompt assistance.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          Thank you for using AfghanTaxCalculator. We’re dedicated to helping
          you manage your tax obligations smoothly and efficiently.
        </p>
      </main>
    </div>
  );
};

export default HowToUsePage;
