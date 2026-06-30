/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "morava.netlify.app"],
    unoptimized: true,
  },
  i18n: {
    locales: ["en", "cs"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
