var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

module.exports = {
  entry: './src/js/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    sourceMapFilename: "./bundle.js.map",
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /img/,
        loader: 'url'
      },
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './index.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './src/data', to: 'data' }
    ]),
    new CopyWebpackPlugin([
      { from: './src/js/index.jsx' }
    ]),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ])
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'source-map',

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 5000
  }
};



//
// const webpack = require('webpack');
// var path = require("path");
//
// module.exports = {
//   context: __dirname,
//   entry: "./src/index.jsx",
//   output: {
//     path: path.join(__dirname, 'dist'),
//     sourceMapFilename: "./bundle.js.map",
//     filename: "bundle.js"
//   },
//   resolve: {
//     extensions: ["*", ".js", ".jsx"]
//   },
//   devtool: 'source-map',
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin(),
//     new webpack.optimize.AggressiveMergingPlugin(),
//   ],
//   module: {
//     loaders: [
//     {
//       test: /\.jsx?$/,
//       exclude: /(node_modules|bower_components)/,
//       loader: 'babel-loader',
//       options: {
//         presets: ['es2015', 'react']
//       }
//     },
//     {
//       test: /\.node$/,
//       loader: "node-loader"
//     }
//     ]
//   },
//     devServer: {
//       inline: true,
//       contentBase: './dist',
//       port: 5000
//     }
// };
