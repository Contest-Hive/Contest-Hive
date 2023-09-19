/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["tailblocks.cc"],
  },
});

module.exports = nextConfig;
