'use strict';

var path = require('path')
  , webpack = require('webpack');

var staticPath = path.resolve(__dirname)
  , publicPath = path.resolve(__dirname, './', './public')
  , vendorPath = path.join(staticPath, 'src/js/vendor');

module.exports = {

  cache: true,

  context: staticPath,

  entry: {
    app: path.join(staticPath, 'src/js/app.jsx'),
    admin: path.join(staticPath, 'src/js/admin.jsx')
  },

  output: {
    path: path.join(publicPath, '/js'),
    filename: '[name].bundle.js',
    chunkFilname: '[id].bundle.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'raw'},
      { test: /\.json$/, loader: 'json'},
      { test: /\.jsx$/, loader: 'jsx-loader'}
    ],
    noParse: [vendorPath]
  },

  resolve: {
    alias: {
      bower: vendorPath,
      jquery: 'bower/jquery',
      'react': 'bower/react/react-with-addons.js',
      //'react-router': 'bower/react-router'
    },
    extensions: ['', '.js', '.styl', '.css', '.jsx'],
    root: [staticPath, vendorPath]
  },

  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ]),

    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],

  devtool: 'source-map'
};