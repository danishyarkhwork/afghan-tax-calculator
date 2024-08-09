import { NextPage, NextPageContext } from "next";
import Link from "next/link";

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  const errorMessage =
    statusCode === 404 ? "Page Not Found" : "An unexpected error has occurred";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">
          {statusCode || 500}
        </h1>
        <p className="mt-4 text-4xl text-gray-600">{errorMessage}</p>
        <p className="mt-2 text-xl text-gray-500 mb-8">
          Sorry, something went wrong. Please try again later.
        </p>
        <Link href="/">
          <a className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Go back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
