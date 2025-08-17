/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["firebasestorage.googleapis.com", "morava.netlify.app"],
    unoptimized: true,
      output: "export",
	},
};

module.exports = nextConfig;
