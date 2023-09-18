/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
