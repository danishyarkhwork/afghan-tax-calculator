"use client";

import React, { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import NoHeaderLayout from "../../../components/layout/NoHeaderLayout";

const EmbedBusinessReceiptsTax: React.FC = () => {
  const [receivableAmount, setReceivableAmount] = useState<number>(0);
  const [airlinesTax, setAirlinesTax] = useState<number>(0);
  const [hospitalityTax, setHospitalityTax] = useState<number>(0);
  const [otherIndustriesTax, setOtherIndustriesTax] = useState<number>(0);
  const [embedMessage, setEmbedMessage] = useState<string>("");
  const [embedLink, setEmbedLink] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmbedLink(
        `<iframe src="${window.location.origin}/embed-business-receipts-tax" width="500" height="800" frameborder="0" allowfullscreen></iframe>`
      );
    }
  }, []);

  const calculateTax = (amount: number, rate: number) => amount * rate;

  useEffect(() => {
    setAirlinesTax(calculateTax(receivableAmount, 0.1));
    setHospitalityTax(calculateTax(receivableAmount, 0.05));
    setOtherIndustriesTax(calculateTax(receivableAmount, 0.04));
  }, [receivableAmount]);

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
            Business Receipts Tax Input
          </h2>
          <div className="mt-4">
            <label
              htmlFor="receivableAmount"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Receivable Amount for this Quarter
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={receivableAmount}
              onValueChange={(values) =>
                setReceivableAmount(values.floatValue || 0)
              }
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
              htmlFor="airlinesTax"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Airlines, Telecommunications, & Superior Hospitality Industries
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={airlinesTax}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900 bg-gray-200"
              placeholder="AFN 0"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="hospitalityTax"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Regular Hospitality Industries
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={hospitalityTax}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900 bg-gray-200"
              placeholder="AFN 0"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="otherIndustriesTax"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              All Other Industries
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={otherIndustriesTax}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900 bg-gray-200"
              placeholder="AFN 0"
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-4">
          <h3 className="text-2xl font-bold text-blue-700">
            Business Receipts Tax Summary
          </h3>
          <table className="w-full table-auto mt-4">
            <thead>
              <tr className="bg-blue-200">
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Industry
                </th>
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Tax Rate
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr>
                <td className="border-t border-b border-l px-4 py-2">
                  Airlines, Telecommunications, & Superior Hospitality
                  Industries
                </td>
                <td className="border-t border-b border-r px-4 py-2">10%</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-t border-b border-l px-4 py-2">
                  Regular Hospitality Industries
                </td>
                <td className="border-t border-b border-r px-4 py-2">5%</td>
              </tr>
              <tr>
                <td className="border-t border-b border-l px-4 py-2">
                  All Other Industries
                </td>
                <td className="border-t border-b border-r px-4 py-2">4%</td>
              </tr>
            </tbody>
          </table>
          <p className="font-semibold text-lg text-gray-700 mt-4">
            Payment Due Date:
          </p>
          <p className="text-gray-600">
            Payments are due 15 days after the end of the Solar Hijri quarter in
            which payment was received.
          </p>
        </div>
      </div>
    </NoHeaderLayout>
  );
};

export default EmbedBusinessReceiptsTax;
