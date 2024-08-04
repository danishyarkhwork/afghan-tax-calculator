"use client";

import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import NoHeaderLayout from "../../../components/layout/NoHeaderLayout";

const EmbedRentalTax: React.FC = () => {
  const [rent, setRent] = useState<number>(0);
  const [withheldAmount, setWithheldAmount] = useState<number>(0);

  const calculateWithholding = (rent: number) => {
    if (rent <= 10000) {
      return 0;
    } else if (rent <= 100000) {
      return rent * 0.1;
    } else {
      return rent * 0.15;
    }
  };

  const handleRentChange = (rent: number) => {
    setRent(rent);
    setWithheldAmount(calculateWithholding(rent));
  };

  return (
    <NoHeaderLayout>
      <div className="bg-white shadow-lg rounded-lg max-w-4xl p-6">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700">Rental Input</h2>
          <div className="mt-4">
            <label
              htmlFor="rent"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Rent Amount (Monthly)
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={rent}
              onValueChange={(values) =>
                handleRentChange(values.floatValue || 0)
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
              htmlFor="withheldAmount"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Withheld Amount
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={withheldAmount}
              onValueChange={(values) =>
                setWithheldAmount(values.floatValue || 0)
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900"
              placeholder="AFN 0"
              isAllowed={({ floatValue }) =>
                floatValue === undefined ||
                floatValue <= Number.MAX_SAFE_INTEGER
              }
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-4">
          <h3 className="text-2xl font-bold text-blue-700">Tax Summary</h3>
          <table className="w-full table-auto mt-4">
            <thead>
              <tr className="bg-blue-200">
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Rent Amount
                </th>
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Withholding Percentage
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr>
                <td className="border-t border-b border-l px-4 py-2">
                  0 to 10,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">0%</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-t border-b border-l px-4 py-2">
                  10,000AFN to 100,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">10%</td>
              </tr>
              <tr>
                <td className="border-t border-b border-l px-4 py-2">
                  Over 100,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">15%</td>
              </tr>
            </tbody>
          </table>
          <p className="font-semibold text-lg text-gray-700 mt-4">
            Payment Due Date:
          </p>
          <p className="text-gray-600">
            Payments are due 10 days after the end of the Solar Hijri month in
            which payment was made.
          </p>
        </div>
      </div>
    </NoHeaderLayout>
  );
};

export default EmbedRentalTax;
