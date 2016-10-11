'user strict'
let path = require('path')
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.devServer.js")

port = 8080


// var webpackConfig = require("./webpackConfig.js")
// let config = webpackConfig(entryFile, outputFile)
// var webpackCompiler = require("./webpackCompiler.js")
// var webpackDevServerConfig = require("./webpackDevServerConfig.js")
var webpackDevServerConfig = {
  hot: true,
  inline: true,
}
var webpackCompiler = webpack(webpackConfig)
var server = new WebpackDevServer(webpackCompiler, webpackDevServerConfig)
server.listen(port);
