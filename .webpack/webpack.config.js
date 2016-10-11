var webpack = require('webpack')
var path = require('path');
var fs = require('fs');
var baseWebpackConfig = require('./webpack.config.base.js')

let entryFilePath = path.resolve('index.jsx')
let outputDirectoryPath = path.resolve('dist')
let isReact = true;
let isModule = true;
let addShebang = false;
let isNode = false;

let config = baseWebpackConfig

if (isNode) {
  if (addShebang) {
    config.plugins.push(
      new webpack.BannerPlugin('#!/usr/bin/env node', {
        raw: true,
        entryOnly: true
      })
    );
  }
  // Get __dirname to work;
  // config.plugins.push(new webpack.DefinePlugin({ __dirname: 'process.cwd()'}))

  config.target = 'node'
  // https://github.com/webpack/webpack/issues/1599
  config.node = {
    __dirname: false,
    __filename: false,
  };
  config.output.libraryTarget = 'commonjs2';
  if (directoryExistsSync("node_modules")) {
    config.externals = fs.readdirSync("node_modules")
  }
} else {
  config.target = 'web';
}

if (isModule) {
  config.output.library = 'babel-webpack-package-boilerplate'
  config.output.libraryTarget = 'commonjs2'
  // What is this for?? Node apps?
}


module.exports = config
