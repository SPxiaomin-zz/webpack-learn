const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // entry: ['./test.js', './main.js'],
  entry: './test.js',
  // entry: './show.js',
  // entry: {
    // a: './test.js',
    // b: './main.js',
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/test',
    chunkFilename: 'async/[name]-test.js',
    // libraryTarget: 'umd',
    // library: 'Haha',

    // 可以结合之前的app-builder插件来学习
    // libraryTarget: '',
    // library: '',
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ['a-loader'],
      //   enforce: 'pre',
      // },
      // {
      //   test: /\.js$/,
      //   use: ['b-loader'],
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          'css-loader',
        ],
      },
      {
        test: /(\.png|\.jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filenme: '[name].css',
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
  ],
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders'),
    ],
  },

  devServer: {

  },
  devtool: 'source-map',
}
