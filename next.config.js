// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com']
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
