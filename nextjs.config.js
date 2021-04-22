const sassPlugin = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const constants = require('./constants')
const withPreact = require('next-plugin-preact')
const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')()

const { ANALYZE } = process.env

const environmentVariables = Object.keys(constants).reduce(
  (defs, key) => ({
    ...defs,
    [`process.env.${key}`]: JSON.stringify(process.env[key])
  }),
  {}
)

const nextConfig = {
  webpack(config, { isServer }) {
    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        })
      )
    }
    const { DefinePlugin } = require('webpack')
    config.plugins.push(new DefinePlugin(environmentVariables))

    return config
  }
}
// removed for component lib dev: cssModules: true in sassLoaderOptions. excludePaths: [node_modules]

module.exports = withPlugins([
  withPreact,
  withCSS,
  [sassPlugin, {
    sassLoaderOptions: {
      includePaths: ['styles']
    }
  }],
  [withImages, {
    inlineImageLimit: -1
  }],
  withSourceMaps
], nextConfig)
