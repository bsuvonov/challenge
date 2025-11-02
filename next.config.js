// next.config.js
const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const isProd = process.env.NODE_ENV === 'production'
const repo = 'challenge'

module.exports = withNextra({
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true
})
