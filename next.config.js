/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com","localhost","m.media-amazon.com","images-na.ssl-images-amazon.com", "codellab.s3.amazonaws.com"],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  },
  experimental: { images: { allowFutureImage: true } },
}

module.exports = nextConfig
