const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const DIR_ROOT = process.cwd();

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: {
      directory: path.resolve(DIR_ROOT, 'dist')
    },
    historyApiFallback: true,
    port: 9000
  }
});
