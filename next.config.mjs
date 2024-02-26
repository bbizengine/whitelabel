/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bbizengine.com",
        //   port: "",
        //   pathname: "",
      },
      {
        protocol: "https",
        hostname: "magnercare-dev.s3.ap-southeast-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
