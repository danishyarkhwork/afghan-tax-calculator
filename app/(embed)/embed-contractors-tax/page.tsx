"use client";

import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import NoHeaderLayout from "../../components/layout/NoHeaderLayout";

const EmbedContractorsTax: React.FC = () => {
  const [annualPayments, setAnnualPayments] = useState<number>(0);
  const [licensedWithholding, setLicensedWithholding] = useState<number>(0);
  const [nonLicensedWithholding, setNonLicensedWithholding] =
    useState<number>(0);

  const calculateContractorWithholding = (
    payments: number,
    isLicensed: boolean
  ) => {
    if (payments <= 500000) {
      return 0;
    } else if (isLicensed) {
      return payments * 0.02;
    } else {
      return payments * 0.07;
    }
  };

  const handleAnnualPaymentsChange = (payments: number) => {
    setAnnualPayments(payments);
    setLicensedWithholding(calculateContractorWithholding(payments, true));
    setNonLicensedWithholding(calculateContractorWithholding(payments, false));
  };

  return (
    <NoHeaderLayout>
      <div className="bg-white shadow-lg rounded-lg max-w-4xl p-6">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700">Contractor Input</h2>
          <div className="mt-4">
            <label
              htmlFor="annualPayments"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Annual Payments to Contractor
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={annualPayments}
              onValueChange={(values) =>
                handleAnnualPaymentsChange(values.floatValue || 0)
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
              htmlFor="licensedWithholding"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Licensed Contractor Tax Withholding
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={licensedWithholding}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900 bg-gray-200"
              placeholder="AFN 0"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="nonLicensedWithholding"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Non-Licensed Contractor Tax Withholding
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={nonLicensedWithholding}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900 bg-gray-200"
              placeholder="AFN 0"
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-4">
          <h3 className="text-2xl font-bold text-blue-700">
            Contractor Tax Summary
          </h3>
          <table className="w-full table-auto mt-4">
            <thead>
              <tr className="bg-blue-200">
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Annual Payments to Contractors
                </th>
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Withholding Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr>
                <td className="border-t border-b border-l px-4 py-2">
                  0 to 500,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">0%</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-t border-b border-l px-4 py-2">
                  Over 500,000AFN to a licensed contractor
                </td>
                <td className="border-t border-b border-r px-4 py-2">
                  2% flat
                </td>
              </tr>
              <tr>
                <td className="border-t border-b border-l px-4 py-2">
                  Over 500,000AFN to a non-licensed contractor
                </td>
                <td className="border-t border-b border-r px-4 py-2">
                  7% flat
                </td>
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

export default EmbedContractorsTax;
