const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.join(__dirname, 'styles'),
      '@components': path.join(__dirname, 'components'),
    };
    return config;
  },
};

module.exports = nextConfig;
