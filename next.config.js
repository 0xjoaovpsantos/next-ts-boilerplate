/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_API_URL: 'https://graphql-marketplace.onrender.com/graphql', //http://localhost:3333
  },
};

module.exports = nextConfig;
