"use client";

import React, { useState, Suspense, lazy, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBook, FaDownload } from "react-icons/fa";
import Skeleton from "./components/common/Skeleton"; // Adjust the import path as necessary
import { blogPosts } from "./data/blogPosts";

// Lazy load components
const SalaryTax = lazy(() => import("./components/home/SalaryTax"));
const RentalTax = lazy(() => import("./components/home/RentalTax"));
const ContractorsTax = lazy(() => import("./components/home/ContractorsTax"));
const BusinessReceiptsTax = lazy(
  () => import("./components/home/BusinessReceiptsTax")
);
const AnnualIncomeTax = lazy(() => import("./components/home/AnnualIncomeTax"));

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("salary");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading blog posts
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "salary":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <SalaryTax />
          </Suspense>
        );
      case "rental":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <RentalTax />
          </Suspense>
        );
      case "contractors":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <ContractorsTax />
          </Suspense>
        );
      case "business":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <BusinessReceiptsTax />
          </Suspense>
        );
      case "annual":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <AnnualIncomeTax />
          </Suspense>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-teal-700 min-h-full text-white">
      <main className="container mx-auto px-4 max-w-6xl py-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-center">
          Welcome to Free Online Afghan Tax Calculator
        </h2>

        <p className="text-lg text-center">
          AfghanTaxCalculator is a free online tool designed to simplify tax
          calculations for Afghan taxpayers, covering salary tax, rental tax,
          contractors tax, business receipts tax, and annual income tax. Users
          can input their financial details to get accurate computations,
          ensuring compliance with Afghan tax laws and avoiding penalties.
        </p>

        <div className="flex flex-wrap justify-center md:justify-center space-x-0 md:space-x-4 mb-6 mt-5">
          {["salary", "rental", "contractors", "business", "annual"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-4 py-2 md:text-xl mb-2 md:mb-0 border-b-2 ${
                  activeTab === tab ? "border-teal-300" : "border-transparent"
                } hover:border-teal-300 transition duration-300`}
              >
                <span role="img" aria-label={tab} className="mr-2">
                  {tab === "salary"
                    ? "💼"
                    : tab === "rental"
                    ? "🏠"
                    : tab === "contractors"
                    ? "🔨"
                    : tab === "business"
                    ? "📈"
                    : "📅"}
                </span>{" "}
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Tax
              </button>
            )
          )}
        </div>

        <div className="bg-gray-100 text-teal-950 lg:p-6 md:p-6 p-0 rounded-lg shadow-md">
          {renderActiveTab()}
        </div>

        {/* Blog Section */}
        <section className="mt-12">
          <h3 className="text-4xl md:text-4xl font-bold mb-4 text-center">
            Recent Blog Posts
          </h3>
          {loading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-teal-800 p-6 rounded-lg shadow-lg"
                >
                  <Skeleton className="w-full h-48 rounded-md mb-4" />
                  <Skeleton className="h-6 mb-2" />
                  <Skeleton className="h-4 mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="w-1/3 h-8" />
                    <Skeleton className="w-1/3 h-8" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 3).map((post) => (
                <div
                  key={post.slug}
                  className="bg-teal-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <Link href={`/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={192}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                  </Link>
                  <Link href={`/${post.slug}`}>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  </Link>
                  <p className="text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between">
                    <Link
                      href={`/${post.slug}`}
                      className="text-white py-2 px-4 rounded flex items-center text-sm hover:bg-teal-400 transition-colors"
                    >
                      <FaBook className="mr-2" /> Read More
                    </Link>
                    <a
                      href={post.guideLink}
                      className="text-white py-2 px-4 rounded flex items-center text-sm hover:bg-teal-400 transition-colors"
                      download
                    >
                      <FaDownload className="mr-2" /> Download Guide
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-14 mb-4">
            <Link
              href="/blog"
              className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-400 transition-colors"
            >
              All Blog Posts
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
