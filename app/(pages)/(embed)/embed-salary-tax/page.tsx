"use client";

import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import NoHeaderLayout from "../../../components/layout/NoHeaderLayout";

const EmbedSalaryTax: React.FC = () => {
  const [grossSalary, setGrossSalary] = useState<number>(0);
  const [netSalary, setNetSalary] = useState<number>(0);
  const [monthlyTax, setMonthlyTax] = useState<number>(0);

  const calculateTax = (salary: number) => {
    if (salary <= 5000) {
      return 0;
    } else if (salary <= 12500) {
      return (salary - 5000) * 0.02;
    } else if (salary <= 100000) {
      return 150 + (salary - 12500) * 0.1;
    } else {
      return 8900 + (salary - 100000) * 0.2;
    }
  };

  const calculateNetFromGross = (gross: number) => gross - calculateTax(gross);

  const calculateGrossFromNet = (net: number) => {
    let gross = net;
    let tax = calculateTax(gross);
    while (net + tax !== gross) {
      gross = net + tax;
      tax = calculateTax(gross);
    }
    return gross;
  };

  const calculateGrossFromTax = (tax: number) => {
    let gross = 0;
    if (tax === 0) return gross;
    if (tax <= 150) gross = tax / 0.02 + 5000;
    else if (tax <= 8750) gross = (tax - 150) / 0.1 + 12500;
    else gross = (tax - 8900) / 0.2 + 100000;
    return gross;
  };

  const handleGrossSalaryChange = (gross: number) => {
    setGrossSalary(gross);
    setNetSalary(calculateNetFromGross(gross));
    setMonthlyTax(calculateTax(gross));
  };

  const handleNetSalaryChange = (net: number) => {
    setNetSalary(net);
    const gross = calculateGrossFromNet(net);
    setGrossSalary(gross);
    setMonthlyTax(calculateTax(gross));
  };

  const handleMonthlyTaxChange = (tax: number) => {
    setMonthlyTax(tax);
    const gross = calculateGrossFromTax(tax);
    setGrossSalary(gross);
    setNetSalary(calculateNetFromGross(gross));
  };

  return (
    <NoHeaderLayout>
      <div className="bg-white shadow-lg rounded-lg max-w-4xl p-6">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700">Salary Input</h2>
          <div className="mt-4">
            <label
              htmlFor="grossSalary"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Gross Salary (Monthly)
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={grossSalary}
              onValueChange={(values) =>
                handleGrossSalaryChange(values.floatValue || 0)
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
              htmlFor="netSalary"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Net Salary
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={netSalary}
              onValueChange={(values) =>
                handleNetSalaryChange(values.floatValue || 0)
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
              htmlFor="monthlyTax"
              className="block text-lg font-semibold text-gray-700 mb-1"
            >
              Monthly Tax
            </label>
            <NumericFormat
              thousandSeparator={true}
              value={monthlyTax}
              onValueChange={(values) =>
                handleMonthlyTaxChange(values.floatValue || 0)
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
                  Monthly Salary
                </th>
                <th className="px-4 py-2 text-left text-blue-800 font-semibold">
                  Withholding Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr>
                <td className="border-t border-b border-l px-4 py-2">
                  0 to 5,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">0%</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-t border-b border-l px-4 py-2">
                  5,000AFN to 12,500AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">
                  2% of amount over 5,000AFN
                </td>
              </tr>
              <tr>
                <td className="border-t border-b border-l px-4 py-2">
                  12,500AFN to 100,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">
                  150AFN + 10% over 12,500AFN
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-t border-b border-l px-4 py-2">
                  Over 100,000AFN
                </td>
                <td className="border-t border-b border-r px-4 py-2">
                  8,900AFN + 20% over 100,000AFN
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

export default EmbedSalaryTax;
