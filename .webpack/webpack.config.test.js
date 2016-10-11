'use strict'
var webpack = require("webpack");
let path = require('path')
var webpackConfig = require("./webpack.config.base.js")

  // YOU NEED TO SET libraryTarget: 'commonjs2'
webpackConfig.entry.app = [];
webpackConfig.output = {
  libraryTarget: 'commonjs2',
}
// When running test we don't want the hash at the end of the class names, so we need to change our loader for css file from this:
// {
//   test: /\.css$/,
//   loaders: [
//     'style',
//   // If we want to use the style.className syntax:
//     'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap',
//     // 'css?&sourceMap',
//     'postcss-loader',
//   ],
// }
webpackConfig.module.loaders = webpackConfig.module.loaders.map(a => {
  if (regexSame(a.test, /\.css$/)) {
    return {
      test: /\.css$/,
      loaders: [
        'style',
      // If we want to use the style.className syntax:
        'css?modules&importLoaders=1&localIdentName=[name]__[local]&sourceMap',
        // 'css?&sourceMap',
        'postcss-loader',
      ],
    }
  } else {
    return a
  }
})

// Needed for react/mocha testing
webpackConfig.externals = {
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
}

function regexSame(r1, r2) {
    if (r1 instanceof RegExp && r2 instanceof RegExp) {
        var props = ["global", "multiline", "ignoreCase", "source"];
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            if (r1[prop] !== r2[prop]) {
                return(false);
            }
        }
        return(true);
    }
    return(false);
}

module.exports = webpackConfig;
