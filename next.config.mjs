import nextPWA from "next-pwa";

// Configure PWA without runtime caching
const pwaConfig = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // Remove runtimeCaching to disable caching
});

const nextConfig = {
  ...pwaConfig,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
