/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/tickets',
        destination: 'https://senjaro.app/events/amapiano-lifestyle-summer-vibes-zanzibar-26-2024',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
