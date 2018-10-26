# 需要掌握的点「跑起一个vue全家桶项目」

1. entry

  能够自由添加 entry「动态entry」。

2. output

  能够搞定构建和生产的相关配置。

3. loader

  学会使用常见loader

  1. js

    eslint 处理

    - source map处理

      devtool: 'source-map'

    对于现在的project-wide，如果按照next分支引入h5 component src的话，那么是不是在根目录下如果使用.babelrc，那么就不会有babel转换了？

    vue

    es6

  2. css

    souce map处理

    postcss 处理

    css 文件提取

  3. 静态资源「图片/svg/字体/pdf」

4. plugin

  htmlwebpackplugin

  搞定代码分割

5. 不同环境的配置区分

  mode的作用

6. dev server

  server

  hmr

  reload

  proxy

  不同的 server 启动方式

  不同的 build 启动方式