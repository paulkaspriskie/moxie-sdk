const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          filename: 'vendors.js',
          minChunks: 1
        }
      }
    }
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '../css/[name].bundle.css'
  })]
});
