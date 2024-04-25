const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod.js');
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  console.log(stats.toString({
    chunks: false,
    colors: true
  }));
});
