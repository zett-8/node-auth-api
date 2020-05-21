const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(path.resolve(__dirname), '/'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test:  /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      }
    ]
  },

  devServer: {
    contentBase: path.join(path.resolve(__dirname), 'dist'),
    compress: true,
    port: 8000
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './index.html'})
  ]
}
