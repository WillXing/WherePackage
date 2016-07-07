import webpack from 'webpack'

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
  }
}