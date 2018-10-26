// import Haha from './main'

// Haha()

// console.log('haha')

// TODO: 优化@babel/polyfill引入之后造成的体积过大的问题
// import '@babel/polyfill'



// [1].includes(1)

// async function a() {
//   const res = await fetch('https://www.baidu.com')
//   const result = await res.json()

//   console.log(result)
// }

import Vue from 'vue'
import App from './App'

// new Set()

// const obj = { }

// obj.x ||= 2

// function es8(var1, var2, var3,) {
//   // ...
//   window.alert(var1, var2, var3)
// }

// es8()



new Vue({
  el: '#app',
  render(h) {
    return h(App)
  },
})
