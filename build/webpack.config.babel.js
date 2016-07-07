import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: __dirname + '/../src',
  entry: {
    app: "./index.js"
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/../dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      inject: true,
      hash: true,
      chunks: ['app']
    })
  ]
}