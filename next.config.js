/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' mailto:",
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

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
  // Note: headers() is ignored with output: 'export'. Security headers
  // are configured in vercel.json + public/_headers instead.
};
// `securityHeaders` retained above for reference / future non-static deploys.
void securityHeaders;

module.exports = nextConfig;
