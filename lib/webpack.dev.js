const { merge } = require('webpack-merge');
const common = require('./lib/webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
});
