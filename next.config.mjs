/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'betelarquitetura.com.br',
      },
    ],
  },
}

export default nextConfig