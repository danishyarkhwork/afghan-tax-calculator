// app/home/page.tsx
import React from "react";
import RootLayout from "./layout";

const HomePage: React.FC = () => {
  return (
    <RootLayout>
      <h1>Home Page</h1>
      <p>This is the contact page of your Next.js app.</p>
    </RootLayout>
  );
};

export default HomePage;
