import nextPWA from "next-pwa";

const pwaConfig = nextPWA({
  dest: "public",
  // Add other PWA options here if needed
});

const nextConfig = {
  ...pwaConfig,
  output: "export",
  // Add other Next.js configuration options here if needed
};

export default nextConfig;
