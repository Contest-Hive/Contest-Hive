/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["tailblocks.cc", "dummyimage.com"],
  },
});

module.exports = nextConfig;
