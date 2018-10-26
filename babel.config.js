module.exports = function(api) {
  api.cache(true)

  const presets = process.env.BABEL_ENV == 'modern'
    ? []
    : [
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
    ]

  const plugins = [
    // TODO:
    // 支持 vue jsx


    // TODO:
    // 1. 为什么下面的增加之后，体积反而会变大
    // 2. 他和@babel/polyfill到底是个什么样的关系
    // '@babel/plugin-transform-runtime',

    // '@babel/plugin-proposal-logical-assignment-operators',
  ]

  return {
    presets,
    plugins,
  }
}
