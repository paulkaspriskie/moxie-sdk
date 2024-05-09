const path = require('path');
const DIR_ROOT = process.cwd();
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  stats: 'minimal',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          },
        },
        extractComments: false,
        parallel: true,
      })
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
          MiniCssExtractPlugin.loader,
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
    new CopyPlugin({
      patterns: [
        {
          from: "lib/templates/.htaccess", to: path.resolve(DIR_ROOT, 'dist')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'lib/templates/index.template.html',
      inject: 'body',
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].bundle.css'
    })
  ],
  output: {
    path: path.resolve(DIR_ROOT, 'dist/js'),
    filename: 'bundle.js',
    clean: true
  },
}
