/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Reduce bundle size — tree-shake icon + motion imports more aggressively
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@tabler/icons-react',
    ],
  },
  // Security note: headers() is IGNORED with output: 'export'. The
  // canonical security-header config lives in:
  //   - vercel.json   (Vercel-served deploys)
  //   - public/_headers (Cloudflare/Netlify static-host portability)
  // Both files must be edited together to stay in sync.
};

module.exports = nextConfig;
