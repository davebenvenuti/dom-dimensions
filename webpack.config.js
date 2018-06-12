// webpack.config.js

const webpack = require('webpack');
const path = require('path');
const libraryName = 'dom-dimensions';
const outputFile = libraryName + '.js';

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "eslint-loader"
        },
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
