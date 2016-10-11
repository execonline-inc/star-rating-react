'use strict'
var webpack = require("webpack");
let path = require('path')
var webpackConfig = require("./webpack.config.base.js")

let entryFile = path.resolve('./examples/index.jsx')

let outputFile = 'assets/bundle.js'

webpackConfig.entry.app = [
  entryFile
]
webpackConfig.entry.app.unshift(
  "webpack-dev-server/client?http://localhost:8080/",
  "webpack/hot/dev-server"
);

webpackConfig.output.path = process.cwd();

webpackConfig.output.filename = outputFile;

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

webpackConfig.module.preLoaders.push(
  {
    test: /\.jsx?$/,
    loaders: ['eslint'],
    exclude: /(node_modules|bower_components)/,
  }
)
webpackConfig.eslint = {
  configFile: path.resolve(__dirname, '..', '.eslintrc.json'),
  formatter: require('eslint-formatter-pretty'),
}

webpackConfig.module.preLoaders.push(
  {
    test: /\.css$/,
    loader: 'stylelint'
  }
)
webpackConfig.stylelint = {
  configFile: path.resolve(__dirname, '..', '.stylelintrc'),
}

module.exports = webpackConfig;
