const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'moviedb.html',
      template: './src/moviedb.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'redwoods.html',
      template: './src/redwoods.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'yelpcamp.html',
      template: './src/yelpcamp.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'social-ape.html',
      template: './src/social-ape.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'spaceX.html',
      template: './src/spaceX.html'
    })
    // new HtmlWebpackPlugin({
    //   filename: 'service.html',
    //   template: './src/service.html'
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'portfolio.html',
    //   template: './src/portfolio.html'
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'about.html',
    //   template: './src/about.html'
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'contact.html',
    //   template: './src/contact.html'
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
