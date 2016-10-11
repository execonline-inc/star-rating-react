var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.log(err)
  }
})
