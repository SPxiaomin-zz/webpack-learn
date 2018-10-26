<template>
  <div class="app">
    haha

    <div
      class="test"
      @click="test"
    >
      test
      {{ c }}
    </div>

    <!-- <img :src="imgSrc" alt=""> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require('./test.jpg'),
    
  },
  methods: {
    test() {
    },
  },
}
</script>

<style lang="scss" scoped>
.app {
  color: blue;

  .test {
    font-size: 50px;
    color: blue;
  }
}
</style>
