import React, { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { NumericFormat } from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const BusinessReceiptsTax: React.FC = () => {
  const [receivableAmount, setReceivableAmount] = useState<number>(0);
  const [airlinesTax, setAirlinesTax] = useState<number>(0);
  const [hospitalityTax, setHospitalityTax] = useState<number>(0);
  const [otherIndustriesTax, setOtherIndustriesTax] = useState<number>(0);
  const handle = useFullScreenHandle();

  const calculateTax = (amount: number, rate: number) => amount * rate;

  useEffect(() => {
    setAirlinesTax(calculateTax(receivableAmount, 0.1));
    setHospitalityTax(calculateTax(receivableAmount, 0.05));
    setOtherIndustriesTax(calculateTax(receivableAmount, 0.04));
  }, [receivableAmount]);

  const handlePrint = useReactToPrint({
    content: () =>
      document.getElementById("business-receipts-tax-content") as HTMLElement,
  });

  const shareUrl = "https://afghantaxcalculator.com";
  const shareText = "Check out this Afghan Tax Calculator!";

  return (
    <FullScreen handle={handle}>
      <div className="bg-gray-100 min-h-screen text-gray-900 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Business Receipts Tax</h1>
          <div>
            {!handle.active && (
              <button
                onClick={handle.enter}
                className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                ⛶ Full Screen
              </button>
            )}
            {handle.active && (
              <button
                onClick={handle.exit}
                className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Exit Full Screen
              </button>
            )}
            <button
              onClick={handlePrint}
              className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              🖨️ Print
            </button>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}&quote=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Share
            </a>
          </div>
        </div>
        <div
          className="container mx-auto max-w-6xl bg-gray-100 p-2 rounded-lg"
          id="business-receipts-tax-content"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="receivableAmount"
                  className="block text-lg font-medium text-gray-700"
                >
                  What was the total receivable amount for this quarter?
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={receivableAmount}
                  onValueChange={(values) =>
                    setReceivableAmount(values.floatValue || 0)
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
                  htmlFor="airlinesTax"
                  className="block text-lg font-medium text-gray-700"
                >
                  Airlines, Telecommunications, & Superior Hospitality
                  Industries
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={airlinesTax}
                  readOnly
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl bg-gray-200"
                  placeholder="AFN 0"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="hospitalityTax"
                  className="block text-lg font-medium text-gray-700"
                >
                  Regular Hospitality Industries
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={hospitalityTax}
                  readOnly
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl bg-gray-200"
                  placeholder="AFN 0"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="otherIndustriesTax"
                  className="block text-lg font-medium text-gray-700"
                >
                  All other industries
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={otherIndustriesTax}
                  readOnly
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl bg-gray-200"
                  placeholder="AFN 0"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                A Summary of Business Receipts Tax (BRT)
              </h3>
              <table className="w-full table-auto mb-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Industries</th>
                    <th className="px-4 py-2">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      Airlines, Telecommunications, & Superior Hospitality
                      Industries
                    </td>
                    <td className="border px-4 py-2">10% flat</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">
                      Regular Hospitality Industries
                    </td>
                    <td className="border px-4 py-2">5% flat</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">All other industries</td>
                    <td className="border px-4 py-2">4% flat</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold">Payment Due Date:</p>
              <p>
                15 days after the end of the Solar Hijri quarter in which
                payment was received.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

export default BusinessReceiptsTax;