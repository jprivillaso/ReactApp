var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },{
        test: /\.css$/,
        loader: 'style!css?modules'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  entry:  __dirname + "/public/js/main.js",
  output: {
    path: __dirname + "/public/bundles",
    filename: "bundle.js"
  }
}