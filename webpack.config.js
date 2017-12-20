let webpack = require("webpack");

module.exports = {
  entry: {
    index: ['./index.js'],
  },
  output: {
    filename: "dist/[name].js",
    library: "StandardEncryption",
    libraryTarget: "umd",
  },
  module: {
    rules: [
    ],
    loaders: [
    ],
  },
  externals: {
  },
};
