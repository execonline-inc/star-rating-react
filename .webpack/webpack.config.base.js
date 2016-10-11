var webpack = require('webpack')
var path = require('path');
var fs = require('fs');

let entryFilePath = path.resolve('index.jsx')
let outputDirectoryPath = path.resolve('dist')

// Need to change this
let isReact = true;

let config = {}

config.debug = false

config.entry = {}
config.entry.app = []

config.entry.app.push(
  path.parse(entryFilePath).name
)

config.output = {
  path: outputDirectoryPath,
  filename: 'index.js',
}

config.resolve = {
  modulesDirectories: [
    'node_modules',
  ],
};

config.module = {};

config.module.loaders = [];
if (isReact) {
  config.module.loaders.push(
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [
          'es2015',
          'stage-0', // Gives use access to propety initializers
          'react',
        ],
      },
    }
  );
} else {
  config.module.loaders.push(
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [
          'es2015',
          'stage-0', // Gives use access to propety initializers
        ],
      },
    }
  );
}

config.module.preLoaders = [];

if (isReact) {
  config.module.loaders.push(
    {
      test: /\.css$/,
      loaders: [
        'style',
      // If we want to use the style.className syntax:
        'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap',
        // 'css?&sourceMap',
        'postcss-loader',
      ],
    }
  );
}

if (isReact) {
  config.postcss = function (webpack) {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require('postcss-cssnext')(),
      require('precss')(),
      require("postcss-color-function"),
      // precss,
      // postcssCssnext
    ];
  }
}
config.plugins = [];

module.exports = config
