const path = require('path');
const DIR_ROOT = process.cwd();
const cliArg = require('node:process').argv.slice(2)[0];
const {setDefaultApp} = require('../util/util-functions.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  stats: 'minimal',
  entry: path.resolve(DIR_ROOT, `apps/${setDefaultApp(cliArg)}/src/js/index.js`),
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'lib/templates/index.template.html',
      inject: 'body',
      minify: true
    })
  ],
  output: {
    path: path.resolve(DIR_ROOT, 'dist/js'),
    filename: 'bundle.js',
    clean: true
  },
  devServer: {
    static: {
      directory: path.resolve(DIR_ROOT, 'dist')
    },
    historyApiFallback: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: true
    }
  }
};
