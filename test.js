// import Haha from './main'

// Haha()

// console.log('haha')

async function a() {
  const res = await fetch('https://www.baidu.com')
  const result = await res.json()

  console.log(result)
}
