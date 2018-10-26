const ora = require('ora')
const webpack = require('webpack')
const webpackConfig = require('./webpack.base.config')

process.env.BABEL_ENV = 'legacy'


function runWebpack() {
  const spinner = ora('building for production...').start()

  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }))
  })
}

runWebpack()
