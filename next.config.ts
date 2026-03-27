const nextConfig = {
  async rewrites() {
    return [
      { source: '/library', destination: '/' },
      { source: '/submit', destination: '/' },
      { source: '/subscribe', destination: '/' },
      { source: '/login', destination: '/' },
      { source: '/signup', destination: '/' },
      { source: '/dashboard', destination: '/' },
      { source: '/forgot-password', destination: '/' },
      { source: '/reset-password', destination: '/' },
      { source: '/terms', destination: '/' },
      { source: '/privacy', destination: '/' },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.dateandtell.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PATCH, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, x-admin-token',
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
