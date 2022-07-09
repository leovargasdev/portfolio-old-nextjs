/** @type {import('next').NextConfig} */
const withReactSvg = require('next-react-svg')
const path = require('path')

const nextConfig = withReactSvg({
  reactStrictMode: true,
  include: path.resolve(__dirname, 'src/icons/'),
  webpack(config, options) {
    return config
  }
})

module.exports = nextConfig
