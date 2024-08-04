"use client";

import React, { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { NumericFormat } from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faCompress,
  faPrint,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Skeleton from "../common/Skeleton";

const AnnualIncomeTax: React.FC = () => {
  const [netIncome, setNetIncome] = useState<number>(0);
  const [legalPersonsTax, setLegalPersonsTax] = useState<number>(0);
  const [naturalPersonsTax, setNaturalPersonsTax] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [embedMessage, setEmbedMessage] = useState<string>("");
  const [embedLink, setEmbedLink] = useState<string>("");
  const handle = useFullScreenHandle();

  const calculateLegalPersonsTax = (income: number) => income * 0.2;

  const calculateNaturalPersonsTax = (income: number) => {
    if (income <= 60000) {
      return 0;
    } else if (income <= 150000) {
      return (income - 60000) * 0.02;
    } else if (income <= 1200000) {
      return 1800 + (income - 150000) * 0.1;
    } else {
      return 106800 + (income - 1200000) * 0.2;
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmbedLink(
        `<iframe src="${window.location.origin}/embed-annual-income-tax" width="500" height="800" frameborder="0" allowfullscreen></iframe>`
      );
    }
  }, []);

  useEffect(() => {
    setLegalPersonsTax(calculateLegalPersonsTax(netIncome));
    setNaturalPersonsTax(calculateNaturalPersonsTax(netIncome));
  }, [netIncome]);

  const handleEmbedCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedLink);
      setEmbedMessage("Copied!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      setEmbedMessage("Failed to copy embed code.");
    }
    setTimeout(() => setEmbedMessage(""), 3000); // Clear message after 3 seconds
  };

  const handlePrint = useReactToPrint({
    content: () =>
      document.getElementById("annual-income-tax-content") as HTMLElement,
  });

  const shareUrl = "https://afghantaxcalculator.com";
  const shareText = "Check out this Afghan Tax Calculator!";

  return (
    <FullScreen handle={handle}>
      <div className="bg-gray-100 rounded min-h-screen text-gray-900 md:p-6 p-3 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 relative">
          <div className="mt-4 sm:mt-0">
            <h1 className="text-3xl font-bold">Annual Income Tax</h1>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-row sm:flex-row sm:justify-between items-center sm:space-x-2 space-y-2 sm:space-y-0 relative">
            {!handle.active && (
              <button
                onClick={handle.enter}
                className="inline-flex items-center px-3 py-2 border ml-1 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FontAwesomeIcon icon={faExpand} className="mr-2" />
                Full Screen
              </button>
            )}
            {handle.active && (
              <button
                onClick={handle.exit}
                className="inline-flex items-center px-3 py-2 border ml-1 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FontAwesomeIcon icon={faCompress} className="mr-2" />
                Exit Full Screen
              </button>
            )}
            <button
              onClick={handlePrint}
              className="inline-flex items-center px-3 py-2 border ml-1 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hidden md:inline-flex"
            >
              <FontAwesomeIcon icon={faPrint} className="mr-2" />
              Print
            </button>
            <div className="relative">
              <button
                onClick={handleEmbedCopy}
                className="inline-flex items-center px-3 py-2 border ml-1 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 hidden md:inline-flex"
              >
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                Embed
              </button>
              {embedMessage && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-gray-800 p-2 rounded shadow-lg">
                  {embedMessage}
                </div>
              )}
            </div>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}&quote=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 border ml-1 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Share
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                shareText + " " + shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 border ml-1 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Share
            </a>
          </div>
        </div>
        <div
          className="container mx-auto max-w-6xl bg-gray-100 p-2 rounded-lg"
          id="annual-income-tax-content"
        >
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Skeleton className="h-10 mb-4" />
                <Skeleton className="h-10 mb-4" />
                <Skeleton className="h-10 mb-4" />
              </div>
              <div>
                <Skeleton className="h-10 mb-4" />
                <Skeleton className="h-40 mb-4" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="netIncome"
                    className="block text-lg font-medium text-gray-700"
                  >
                    What is the annual net income?
                  </label>
                  <NumericFormat
                    thousandSeparator={true}
                    value={netIncome}
                    onValueChange={(values) =>
                      setNetIncome(values.floatValue || 0)
                    }
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl"
                    placeholder="AFN 0"
                    isAllowed={({ floatValue }) =>
                      floatValue === undefined ||
                      floatValue <= Number.MAX_SAFE_INTEGER
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="legalPersonsTax"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Legal Persons
                  </label>
                  <NumericFormat
                    thousandSeparator={true}
                    value={legalPersonsTax}
                    readOnly
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl bg-gray-200"
                    placeholder="AFN 0"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="naturalPersonsTax"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Natural Persons
                  </label>
                  <NumericFormat
                    thousandSeparator={true}
                    value={naturalPersonsTax}
                    readOnly
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl bg-gray-200"
                    placeholder="AFN 0"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  A Summary of Annual Income Tax
                </h3>
                <table className="w-full table-auto mb-4">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2">Entity Type</th>
                      <th className="px-4 py-2">Net Income</th>
                      <th className="px-4 py-2">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2" rowSpan={2}>
                        Legal Persons
                      </td>
                      <td className="border px-4 py-2">Over 0AFN</td>
                      <td className="border px-4 py-2">20% flat</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2" colSpan={2}></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2" rowSpan={4}>
                        Natural Persons
                      </td>
                      <td className="border px-4 py-2">0 to 60,000AFN</td>
                      <td className="border px-4 py-2">0%</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">
                        60,000AFN to 150,000AFN
                      </td>
                      <td className="border px-4 py-2">2% over 60,000AFN</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">
                        150,000AFN to 1,200,000AFN
                      </td>
                      <td className="border px-4 py-2">
                        1,800AFN + 10% over 150,000AFN
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">Over 1,200,000AFN</td>
                      <td className="border px-4 py-2">
                        106,800AFN + 20% over 1,200,000AFN
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-semibold">Payment Due Date:</p>
                <p>Within 3 months of the end of the Afghan fiscal year.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </FullScreen>
  );
};

export default AnnualIncomeTax;
