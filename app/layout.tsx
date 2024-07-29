import React, { ReactNode } from "react";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { metadata } from "./metadata";

type LayoutProps = {
  children: ReactNode;
};

export { metadata };

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
