/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "im.vsco.co",
  //       port: "",
  //       pathname:
  //         "/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2",
  //     },
  //   ],
  // },
};// next.config.js

module.exports = {
  images: {
    domains: ['i.postimg.cc'],
  },
}


module.exports = nextConfig;
