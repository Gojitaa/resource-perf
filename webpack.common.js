const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: './client/index.js',
  output: {
    filename: '[name].bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
        "API_URL": JSON.stringify("https://imdb-api.com/en/API/ComingSoon/<apikey>")
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader', 
          options: {
              esModule: true,
              modules: {
                namedExport: true,
                localIdentName: "[name]_[local]",
              },
          }
        }
        ]
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }]
  }
};