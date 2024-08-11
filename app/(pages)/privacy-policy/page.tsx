import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-slate-200 min-h-full text-gray-900">
      <main className="container mx-auto p-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h2>

        <p className="mb-6 text-lg leading-relaxed">
          This Privacy Policy outlines the types of personal information that is
          received and collected by{" "}
          <span className="font-bold text-teal-300">AfghanTaxCalculator</span>{" "}
          and how it is used.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Information We Collect</h3>
        <p className="mb-6 text-lg leading-relaxed">
          We may collect personal information from you such as your name, email
          address, and any other information you provide when using our
          services. This information is collected when you contact us, subscribe
          to our newsletter, or interact with our services.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          The information we collect from you may be used in the following ways:
          <ul className="list-disc ml-6">
            <li>To personalize your experience on our site</li>
            <li>To improve our website and services</li>
            <li>
              To process transactions and send notifications about your
              activities
            </li>
            <li>To send periodic emails about our services or updates</li>
            <li>To respond to your inquiries and support needs</li>
          </ul>
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Protection of Information
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          We implement a variety of security measures to maintain the safety of
          your personal information. We use encryption, firewalls, and other
          technology and security procedures to help protect your information
          from unauthorized access, use, or disclosure.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Cookies</h3>
        <p className="mb-6 text-lg leading-relaxed">
          AfghanTaxCalculator may use cookies to enhance your experience while
          using our website. Cookies are small files that a site or its service
          provider transfers to your computer's hard drive through your Web
          browser (if you allow) that enables the site's or service provider's
          systems to recognize your browser and capture and remember certain
          information.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Third-party Disclosure</h3>
        <p className="mb-6 text-lg leading-relaxed">
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information unless we provide users with
          advance notice. This does not include website hosting partners and
          other parties who assist us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential. We may also release information when
          it's release is appropriate to comply with the law, enforce our site
          policies, or protect ours or others' rights, property or safety.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Third-party Links</h3>
        <p className="mb-6 text-lg leading-relaxed">
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our website. These third-party sites have
          separate and independent privacy policies. We, therefore, have no
          responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our
          site and welcome any feedback about these sites.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Changes to Our Privacy Policy
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          AfghanTaxCalculator reserves the right to update or change our Privacy
          Policy at any time. We encourage users to frequently check this page
          for any changes. You acknowledge and agree that it is your
          responsibility to review this Privacy Policy periodically and become
          aware of modifications.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Your Consent</h3>
        <p className="mb-6 text-lg leading-relaxed">
          By using our site, you consent to our website Privacy Policy.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Contacting Us</h3>
        <p className="mb-6 text-lg leading-relaxed">
          If you have any questions regarding this privacy policy, you may
          contact us using the information below:
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

export default PrivacyPolicyPage;
