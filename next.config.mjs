/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security hardening headers (tune at your edge/proxy for production)
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()' },
        ],
      },
      // If COOP/COEP relaxations are required for a specific route, scope them narrowly like below:
      // {
      //   source: '/wallet-popup',
      //   headers: [
      //     { key: 'Cross-Origin-Opener-Policy', value: 'unsafe-none' },
      //     { key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' },
      //   ],
      // },
    ]
  },
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Avoid bundling optional server-only pretty-printer in browser/runtime builds
      'pino-pretty': false,
      // Also guard common server modules if pulled transitively
      'fs': false,
      'path': false,
      'os': false,
      'worker_threads': false,
    }
    return config
  },
};

export default nextConfig;
