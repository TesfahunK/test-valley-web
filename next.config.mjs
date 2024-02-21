/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "testvalley.kr",
      },
    ],
  },
};

export default nextConfig;
