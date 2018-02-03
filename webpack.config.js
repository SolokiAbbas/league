const webpack = require('webpack');
var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.node$/,
      loader: "node-loader"
    }
    ]
  }
};
