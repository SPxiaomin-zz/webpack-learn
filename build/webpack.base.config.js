const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TestPlugin = require('./plugins/testPlugin')

module.exports = {
  mode: 'development',
  // entry: ['./test.js', './main.js'],
  entry: './src/test.js',
  // entry: './show.js',
  // entry: {
  //   a: './test.js',
  //   b: './main.js',
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    // chunkFilename: 'async/[name]-test.js',
    // libraryTarget: 'umd',
    // library: 'Haha',
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
      //   // exclude: /node_modules/,
      // },
      {
        test: /\.(js|vue)$/,
        // test: /\.js$/,
        use: [
          'eslint-loader',
        ],
        exclude: /node_modules/,
        enforce: 'pre',
      },
      // TODO: 
      // 支持vue-ts & ts
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ],
        exclude: /node_modules/,
      },
      // TODO:
      // css loader module支持处理
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          {
            loader: 'css-loader',
            options: {
              // TODO: source map作用，
              sourceMap: true,
            },
          },
          'postcss-loader',
          'sass-loader',
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
    new MiniCssExtractPlugin({
      filenme: '[name].css',
    }),
    new VueLoaderPlugin(),
    // TODO:
    // 页面的所依赖的js，通过chunk，但是页面所依赖的css怎么指定？
    // 页面的公共css是怎么打包出来的？
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new TestPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
  },
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
