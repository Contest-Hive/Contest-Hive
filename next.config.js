/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  async headers() {
    return [
      {
        source: "/api/atcoder", // Change this to match your API route
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Change this to the origin(s) you want to allow
          },
        ],
      },
    ];
  },
});

module.exports = nextConfig;
