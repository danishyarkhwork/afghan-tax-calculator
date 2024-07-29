import nextPWA from "next-pwa";

const pwaConfig = nextPWA({
  dest: "public",
});

const nextConfig = {
  ...pwaConfig,
  output: "export",
};

export default nextConfig;
