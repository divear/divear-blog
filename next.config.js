/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["firebasestorage.googleapis.com", "morava.netlify.app"],
	},
};

module.exports = nextConfig;
