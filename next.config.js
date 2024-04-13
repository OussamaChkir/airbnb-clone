/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['links.papareact.com'],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://www.jsonkeeper.com/b/4G1G/:path*',
          },
        ]
    },
};

module.exports = nextConfig;
