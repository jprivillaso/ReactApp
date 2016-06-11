module.exports = {
  entry: "./public/js/entry.js",
  output: {
    path: __dirname,
    filename: "./public/bundles/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css"}
    ]
  }
}