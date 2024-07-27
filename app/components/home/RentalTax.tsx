import React, { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { NumericFormat } from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const RentalTax: React.FC = () => {
  const [rent, setRent] = useState<number>(0);
  const [withheldAmount, setWithheldAmount] = useState<number>(0);
  const handle = useFullScreenHandle();

  const calculateWithholding = (rent: number) => {
    if (rent <= 10000) {
      return 0;
    } else if (rent <= 100000) {
      return rent * 0.1;
    } else {
      return rent * 0.15;
    }
  };

  useEffect(() => {
    setWithheldAmount(calculateWithholding(rent));
  }, [rent]);

  const handlePrint = useReactToPrint({
    content: () => document.getElementById("rental-tax-content") as HTMLElement,
  });

  const shareUrl = "https://afghantaxcalculator.com";
  const shareText = "Check out this Afghan Tax Calculator!";

  return (
    <FullScreen handle={handle}>
      <div className="bg-gray-100 min-h-screen text-gray-900 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Rental Tax</h1>
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
          id="rental-tax-content"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="rent"
                  className="block text-xl font-semibold text-gray-700 mb-4"
                >
                  How much are you paying/collecting in rent?
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={rent}
                  onValueChange={(values) => setRent(values.floatValue || 0)}
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
                  htmlFor="withheldAmount"
                  className="block text-lg font-medium text-gray-700"
                >
                  Amount to Withhold
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  value={withheldAmount}
                  readOnly
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl bg-gray-200"
                  placeholder="AFN 0"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                A Summary of Rental Withholding Tax
              </h3>
              <table className="w-full table-auto mb-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Monthly Rent</th>
                    <th className="px-4 py-2">Withholding Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">0 to 10,000AFN</td>
                    <td className="border px-4 py-2">0%</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">
                      10,000AFN to 100,000AFN
                    </td>
                    <td className="border px-4 py-2">10% flat</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Over 100,000AFN</td>
                    <td className="border px-4 py-2">15% flat</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold">Payment Due Date:</p>
              <p>
                15 days after the end of Solar Hijri month in which payment was
                made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

export default RentalTax;