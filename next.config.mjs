import nextPWA from "next-pwa";

const pwaConfig = nextPWA({
  dest: "public",
});

const nextConfig = {
  ...pwaConfig,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
