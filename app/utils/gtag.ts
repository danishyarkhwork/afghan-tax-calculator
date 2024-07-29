// src/lib/gtag.ts
export const GA_TRACKING_ID = "G-MFXJ7VZ9KF"; // Your Google Analytics Tracking ID

// Track page views
export const pageview = (url: string) => {
  if (window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Add any other gtag functions here, e.g., event tracking
