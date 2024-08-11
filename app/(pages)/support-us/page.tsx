import React from "react";

const SupportPage: React.FC = () => {
  return (
    <div className="bg-slate-200 min-h-full text-gray-900">
      <main className="container mx-auto p-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Support Us - Afghan Tax Calculator
        </h2>

        <p className="mb-6 text-lg leading-relaxed">
          At{" "}
          <span className="font-bold text-teal-300">AfghanTaxCalculator</span>,
          we are dedicated to providing a free and accurate tool for navigating
          Afghan tax regulations. To continue offering and improving our
          services, we need your support. Here’s how you can help us make a
          difference:
        </p>

        <h3 className="text-2xl font-semibold mb-4">Why Support Us?</h3>
        <p className="mb-6 text-lg leading-relaxed">
          Your support helps us maintain and enhance our platform, ensuring that
          Afghan taxpayers have access to the best tools for managing their tax
          obligations. With your help, we can continue offering our services for
          free and improve our features to better serve our users.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Ways to Support Us</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold mb-3">💸 Donate</h4>
            <p>
              Your financial contributions are crucial for keeping
              AfghanTaxCalculator operational. Donations help us cover costs and
              invest in new features.
            </p>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-teal-300 hover:text-teal-100">
                  Donate via PayPal
                </a>
              </li>
              <li>
                <p className="text-teal-300 hover:text-teal-100">
                  +93 70 332 5036
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold mb-3">📣 Spread the Word</h4>
            <p>
              Help us reach more users by sharing AfghanTaxCalculator with your
              network. The more people know about us, the more we can help.
            </p>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-teal-300 hover:text-teal-100">
                  Share on Social Media
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-300 hover:text-teal-100">
                  Refer a Friend
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold mb-3">📝 Provide Feedback</h4>
            <p>
              Your feedback helps us improve our tool. Share your thoughts,
              report issues, or suggest new features.
            </p>
            <a href="#" className="text-teal-300 hover:text-teal-100">
              Submit Feedback
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Join Us in Making a Difference
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          Your support is crucial in helping us continue our mission of
          providing a reliable and free tax calculator for Afghan taxpayers.
          Together, we can make a significant impact and help our users navigate
          their tax obligations with ease.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Thank you for being a part of the AfghanTaxCalculator community. For
          any questions or additional support, please reach out to us at{" "}
          <a
            href="mailto:support@info@khaliddanishyar.com"
            className="text-teal-300 hover:text-teal-100"
          >
            info@khaliddanishyar.com
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default SupportPage;
