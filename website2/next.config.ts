/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Use unoptimized images
  },
  trailingSlash: true, // Ensures correct paths for static files
};

module.exports = nextConfig;