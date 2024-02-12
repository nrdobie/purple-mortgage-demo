/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      }
    ]
  }
};

// const nextConfig = withPlaiceholder(baseConfig)

export default nextConfig;
