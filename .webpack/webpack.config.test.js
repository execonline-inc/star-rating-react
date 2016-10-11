'use strict'
var webpack = require("webpack");
let path = require('path')
var webpackConfig = require("./webpack.config.base.js")

  // YOU NEED TO SET libraryTarget: 'commonjs2'
webpackConfig.entry.app = [];
webpackConfig.output = {
  libraryTarget: 'commonjs2',
}

// Needed for react/mocha testing
webpackConfig.externals = {
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
}

module.exports = webpackConfig;
