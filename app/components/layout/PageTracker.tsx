// app/components/PageTracker.tsx
"use client"; // Mark this component as a Client Component

import { useEffect } from "react";
import { pageview } from "../../utils/gtag";

const PageTracker: React.FC = () => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url); // Track page views
    };

    // Track the initial page load
    handleRouteChange(window.location.pathname);

    // Listen for route changes
    window.addEventListener("popstate", () =>
      handleRouteChange(window.location.pathname)
    );
    window.addEventListener("pushState", () =>
      handleRouteChange(window.location.pathname)
    );
    window.addEventListener("replaceState", () =>
      handleRouteChange(window.location.pathname)
    );

    return () => {
      window.removeEventListener("popstate", () =>
        handleRouteChange(window.location.pathname)
      );
      window.removeEventListener("pushState", () =>
        handleRouteChange(window.location.pathname)
      );
      window.removeEventListener("replaceState", () =>
        handleRouteChange(window.location.pathname)
      );
    };
  }, []);

  return null; // This component does not render anything
};

export default PageTracker;
