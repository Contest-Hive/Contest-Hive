/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["tailblocks.cc", "dummyimage.com"],
  },
});

module.exports = nextConfig;
