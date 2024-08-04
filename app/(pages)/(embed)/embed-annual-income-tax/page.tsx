"use client";

import React, { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import NoHeaderLayout from "../../../components/layout/NoHeaderLayout";

const EmbedAnnualIncomeTax: React.FC = () => {
  const [netIncome, setNetIncome] = useState<number>(0);
  const [legalPersonsTax, setLegalPersonsTax] = useState<number>(0);
  const [naturalPersonsTax, setNaturalPersonsTax] = useState<number>(0);
  const [embedMessage, setEmbedMessage] = useState<string>("");
  const [embedLink, setEmbedLink] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmbedLink(
        `<iframe src="${window.location.origin}/embed-annual-income-tax" width="500" height="800" frameborder="0" allowfullscreen></iframe>`
      );
    }
  }, []);

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

  return (
    <NoHeaderLayout>
      <div className="bg-white shadow-lg rounded-lg max-w-4xl p-6">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700">
            Annual Income Tax Input
          </h2>
          <div className="mt-4">
            <label
              htmlFor="netIncome"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Annual Net Income
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={netIncome}
              onValueChange={(values) => setNetIncome(values.floatValue || 0)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900"
              placeholder="AFN 0"
              isAllowed={({ floatValue }) =>
                floatValue === undefined ||
                floatValue <= Number.MAX_SAFE_INTEGER
              }
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="legalPersonsTax"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Legal Persons Tax
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={legalPersonsTax}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900 bg-gray-200"
              placeholder="AFN 0"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="naturalPersonsTax"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Natural Persons Tax
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={naturalPersonsTax}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900 bg-gray-200"
              placeholder="AFN 0"
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-4">
          <h3 className="text-2xl font-bold text-blue-700">
            Annual Income Tax Summary
          </h3>
          <table className="w-full table-auto mt-4">
            <thead>
              <tr className="bg-blue-200">
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Entity Type
                </th>
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Net Income
                </th>
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Tax Rate
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr>
                <td
                  className="border-t border-b border-l px-4 py-2"
                  rowSpan={2}
                >
                  Legal Persons
                </td>
                <td className="border-t border-b px-4 py-2">Over 0AFN</td>
                <td className="border-t border-b border-r px-4 py-2">
                  20% flat
                </td>
              </tr>
              <tr>
                <td className="border-t border-b px-4 py-2" colSpan={2}></td>
              </tr>
              <tr className="bg-gray-100">
                <td
                  className="border-t border-b border-l px-4 py-2"
                  rowSpan={4}
                >
                  Natural Persons
                </td>
                <td className="border-t border-b px-4 py-2">0 to 60,000AFN</td>
                <td className="border-t border-b border-r px-4 py-2">0%</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-t border-b px-4 py-2">
                  60,000AFN to 150,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">
                  2% over 60,000AFN
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-t border-b px-4 py-2">
                  150,000AFN to 1,200,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">
                  1,800AFN + 10% over 150,000AFN
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-t border-b border-l px-4 py-2">
                  Over 1,200,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">
                  106,800AFN + 20% over 1,200,000AFN
                </td>
              </tr>
            </tbody>
          </table>
          <p className="font-semibold text-lg text-gray-700 mt-4">
            Payment Due Date:
          </p>
          <p className="text-gray-600">
            Payments are due within 3 months of the end of the Afghan fiscal
            year.
          </p>
        </div>

        <div className="mt-4">
          <button
            onClick={handleEmbedCopy}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            Embed
          </button>
          {embedMessage && (
            <span className="text-sm text-gray-600 ml-2">{embedMessage}</span>
          )}
        </div>
      </div>
    </NoHeaderLayout>
  );
};

export default EmbedAnnualIncomeTax;
