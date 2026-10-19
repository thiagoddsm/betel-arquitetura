/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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