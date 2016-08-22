import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'

export default {
  context: __dirname + '/../src',
  entry: {
    app: "./index.jsx"
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/../dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        )
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('[name].[hash].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      inject: true,
      hash: true,
      chunks: ['app']
    })
  ]
}