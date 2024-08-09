// pages/404.tsx

import Link from "next/link";
import { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-4xl text-gray-600">Page Not Found</p>
        <p className="mt-2 text-xl text-gray-500 mb-8">
          Sorry, the page you’re looking for doesn’t exist.
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

export default NotFound;
