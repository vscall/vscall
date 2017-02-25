// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: "build",
    publicPath: "assets",
  },
  // resolve: {
  //   modulesDirectories: [
  //     "."
  //   ]
  // },
  // presets: [
  //   ["es2015", { "modules": false }]
  // ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [ 'es2015' ]
        }
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({ title: 'Tree-shaking' })
  // ]
}
