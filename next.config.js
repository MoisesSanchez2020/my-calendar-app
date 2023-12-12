// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    eslint: {
      dirs: ['components', 'lib', 'pages'], // Directories to lint
    },
    // Add any additional Next.js configurations here
  };
  
  module.exports = nextConfig;
  