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
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
