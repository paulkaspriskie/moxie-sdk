const path = require('path');
const DIR_ROOT = process.cwd();


module.exports = {
  status: 'minial',
  entry: path.resolve(DIR_ROOT, 'src/js/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  output: {
    path: path.resolve(DIR_ROOT, 'dist/js'),
    filename: bundle.js
  }
};
