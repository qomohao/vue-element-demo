<template>
  <div id="app">
    VUE
  </div>
</template>

<script>
import config from '@/libs/config'
  export default {
    name: 'App',
    mounted() {
      console.log('当前环境',process.env.NODE_ENV,config)
    },
  }
</script>

<style>
  #app {}
</style>