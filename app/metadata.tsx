import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afghan Tax Calculator",
  description: "This is the about page of my Next.js app",
  keywords: [
    "Afghan Tax Calculation",
    "Afghan Tax Calculator",
    "Tax Calculation",
    "Salary Tax Calculation",
  ],
  openGraph: {
    title: "Afghan Tax Calculator",
    description:
      "AfghanTaxCalculator is a free online tool designed to simplify tax calculations for Afghan taxpayers, covering salary tax, rental tax, contractors tax, business receipts tax, and annual income tax.",
    type: "website",
    url: "https://afghantaxcalculator.com/",
    // images: [
    //   {
    //     url: "https://www.example.com/images/og-image.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Og Image Alt",
    //   },
    // ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
