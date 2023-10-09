const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(commonConfig, {
   mode: 'production',
   devtool: 'source-map',
   devServer: {
      port: 8080,
      hot: true,
      open: true
   },
   optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
   },
})