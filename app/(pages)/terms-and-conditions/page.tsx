import React from "react";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-slate-100 min-h-full text-gray-900">
      <main className="container mx-auto p-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Terms and Conditions
        </h2>

        <p className="mb-6 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-bold text-teal-300">AfghanTaxCalculator</span>.
          These Terms and Conditions govern your use of our website and
          services. By accessing or using our site, you agree to comply with and
          be bound by these terms. Please read them carefully.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Acceptance of Terms</h3>
        <p className="mb-6 text-lg leading-relaxed">
          By using AfghanTaxCalculator, you accept and agree to be bound by the
          terms and provision of this agreement. In addition, when using
          AfghanTaxCalculator's services, you shall be subject to any posted
          guidelines or rules applicable to such services, which may be posted
          and modified from time to time. All such guidelines or rules are
          hereby incorporated by reference into the Terms of Use.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Use of Our Services</h3>
        <p className="mb-6 text-lg leading-relaxed">
          AfghanTaxCalculator grants you a non-exclusive, non-transferable,
          limited right to access and use our website and services, provided
          that you comply fully with these Terms and Conditions. The services
          offered are intended for personal and informational use only, and not
          for commercial purposes unless explicitly stated otherwise.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Intellectual Property</h3>
        <p className="mb-6 text-lg leading-relaxed">
          All content included on the site, such as text, graphics, logos,
          images, and software, is the property of AfghanTaxCalculator or its
          content suppliers and is protected by international copyright laws.
          The compilation of all content on this site is the exclusive property
          of AfghanTaxCalculator.
        </p>

        <h3 className="text-2xl font-semibold mb-4">User Conduct</h3>
        <p className="mb-6 text-lg leading-relaxed">
          You agree to use our website and services only for lawful purposes.
          You are prohibited from using our site in a way that causes or may
          cause damage to the website or impairment of the availability or
          accessibility of the website. You are not allowed to use the website
          in any way which is unlawful, illegal, fraudulent, or harmful.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Disclaimer of Warranties
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          AfghanTaxCalculator makes no representations or warranties of any kind
          regarding the completeness, accuracy, reliability, suitability, or
          availability of the website or the information, products, services, or
          related graphics contained on the website for any purpose. Any
          reliance you place on such information is therefore strictly at your
          own risk.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Limitation of Liability</h3>
        <p className="mb-6 text-lg leading-relaxed">
          In no event will AfghanTaxCalculator be liable for any loss or damage
          including without limitation, indirect or consequential loss or
          damage, or any loss or damage whatsoever arising from loss of data or
          profits arising out of, or in connection with, the use of this
          website.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Changes to These Terms</h3>
        <p className="mb-6 text-lg leading-relaxed">
          AfghanTaxCalculator reserves the right to change these terms and
          conditions at any time by posting changes online. Your continued use
          of this site after changes are posted constitutes your acceptance of
          this agreement as modified.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Governing Law</h3>
        <p className="mb-6 text-lg leading-relaxed">
          These terms and conditions are governed by and construed in accordance
          with the laws of Afghanistan, and you irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="mb-6 text-lg leading-relaxed">
          If you have any questions about these Terms and Conditions, please
          contact us at:
          <br />
          <strong>Afghan Tax Calculator</strong>
          <br />
          Kabul, Afghanistan
          <br />
          Email:{" "}
          <a
            href="mailto:support@afghantaxcalculator.com"
            className="text-teal-300 hover:text-teal-200"
          >
            support@afghantaxcalculator.com
          </a>
        </p>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;
