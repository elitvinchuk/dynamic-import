const AnalyzePlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  plugins: [
    new AnalyzePlugin()
  ]
}
