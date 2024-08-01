// src/app/layout.tsx

import React, { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { metadata } from "./metadata";
import PageTracker from "./components/layout/PageTracker";

type LayoutProps = {
  children: ReactNode;
};

export { metadata };

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag; // Define gtag on the window object
            gtag('js', new Date());
            gtag('config', 'G-MFXJ7VZ9KF'); // Your Google Analytics Tracking ID
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main className="container mx-auto bg-teal-700">{children}</main>
        <PageTracker />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
