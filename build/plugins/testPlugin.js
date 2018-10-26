class testPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('testPlugin', (compilation) => {
      console.log('start a new compilation')
    })
  }
}

module.exports = testPlugin
