module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com', 'cdn.sanity.io'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://ntson-portfolio-studio.sanity.studio',
        permanent: true,
      },
    ];
  },
};
