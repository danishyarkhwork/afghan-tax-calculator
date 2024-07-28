import React, { ReactNode } from "react";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

type LayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
