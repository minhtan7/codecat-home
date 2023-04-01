/** @type {import('next').NextConfig} */

const withVideos = require('next-videos');

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com', 'www.medlangfanatic.com'],
  },
};

module.exports = withVideos(nextConfig);