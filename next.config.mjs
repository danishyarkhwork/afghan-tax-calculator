import nextPWA from "next-pwa";

const pwaConfig = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "http-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
    {
      urlPattern: /^\/static\/.*$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
  ],
});

const nextConfig = {
  ...pwaConfig,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
