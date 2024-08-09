// src/pages/contact.tsx

import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-teal-700 min-h-screen text-white flex flex-col items-center py-10 px-4 md:px-0">
      <main className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

        {/* Contact Details in a Responsive Grid */}
        <div className="grid grid-cols-1 px-16 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-2xl text-teal-300" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-sm">Kabul, Afghanistan</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-2xl text-teal-300" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a
                href="mailto:support@afghantaxcalculator.com"
                className="text-sm text-teal-200 hover:text-teal-100"
              >
                support@afghantaxcalculator.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-2xl text-teal-300" />
            <div>
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <a
                href="https://wa.me/+93703325036"
                className="text-sm text-teal-200 hover:text-teal-100"
              >
                +93 70 332 5036
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-teal-700">
            Get in Touch
          </h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
