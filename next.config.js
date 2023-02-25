/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img1.daumcdn.net', 'www.notion.so', 's3.us-west-2.amazonaws.com', 'images.unsplash.com', 'kku.dev', 's3-us-west-2.amazonaws.com'],
  },
}

module.exports = nextConfig
