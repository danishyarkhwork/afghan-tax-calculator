import React, { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { NumericFormat } from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faCompress,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContractorsTax: React.FC = () => {
  const [annualPayments, setAnnualPayments] = useState<number>(0);
  const [licensedWithholding, setLicensedWithholding] = useState<number>(0);
  const [nonLicensedWithholding, setNonLicensedWithholding] =
    useState<number>(0);
  const handle = useFullScreenHandle();

  const calculateWithholding = (payments: number, isLicensed: boolean) => {
    if (payments <= 500000) {
      return 0;
    } else if (isLicensed) {
      return payments * 0.02;
    } else {
      return payments * 0.07;
    }
  };

  useEffect(() => {
    setLicensedWithholding(calculateWithholding(annualPayments, true));
    setNonLicensedWithholding(calculateWithholding(annualPayments, false));
  }, [annualPayments]);

  const handlePrint = useReactToPrint({
    content: () =>
      document.getElementById("contractors-tax-content") as HTMLElement,
  });

  const shareUrl = "https://afghantaxcalculator.com";
  const shareText = "Check out this Afghan Tax Calculator!";

  return (
    <FullScreen handle={handle}>
      <div className="bg-gray-100 rounded min-h-screen text-gray-900 md:p-6 p-3 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <div className="mt-4 sm:mt-0">
            <h1 className="text-3xl font-bold">Contractors Tax</h1>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-row sm:flex-row sm:justify-between items-center sm:space-x-2 space-y-2 sm:space-y-0">
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
          id="contractors-tax-content"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="annualPayments"
                  className="block text-lg font-medium text-gray-700"
                >
                  How much do you pay your vendor/contractor? (Sum of all
                  invoices for the fiscal year)
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={annualPayments}
                  onValueChange={(values) =>
                    setAnnualPayments(values.floatValue || 0)
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
                  htmlFor="licensedWithholding"
                  className="block text-lg font-medium text-gray-700"
                >
                  Licensed Contractor Tax Withholding
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={licensedWithholding}
                  readOnly
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl bg-gray-200"
                  placeholder="AFN 0"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nonLicensedWithholding"
                  className="block text-lg font-medium text-gray-700"
                >
                  Non-Licensed Contractor Tax Withholding
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={nonLicensedWithholding}
                  readOnly
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl bg-gray-200"
                  placeholder="AFN 0"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                A Summary of Contract Withholding Tax
              </h3>
              <table className="w-full table-auto mb-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">
                      Annual Payments to Contractors
                    </th>
                    <th className="px-4 py-2">Withholding Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">0 to 500,000AFN</td>
                    <td className="border px-4 py-2">0%</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">
                      Over 500,000AFN to a licensed contractor
                    </td>
                    <td className="border px-4 py-2">2% flat</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      Over 500,000AFN to a non-licensed contractor
                    </td>
                    <td className="border px-4 py-2">7% flat</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold">Payment Due Date:</p>
              <p>
                10 days after the end of Solar Hijri month in which payment was
                made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

export default ContractorsTax;
