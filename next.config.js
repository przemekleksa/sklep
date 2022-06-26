/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "i.picsum.photos",
      "naszsklep-api.vercel.app",
      "fakestoreapi.com",
    ],
  },
};

module.exports = nextConfig;
