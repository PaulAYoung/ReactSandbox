let path = require('path');
let webpack = require('webpack');

let BUILD_DIR = path.resolve(__dirname, 'build');
let APP_DIR = path.resolve(__dirname, 'src');

let config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
};

module.exports = config;
