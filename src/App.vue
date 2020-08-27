<template>
  <div id="app">
       <router-view></router-view>
   </div>
</template>

<script>
  import {
    Loading
  } from 'element-ui'
  import envConfig from '@/libs/envConfig'
  export default {
    name: 'App',
    created() {
      // Loading.service({
      //   text: 'Page loading...',
      //   target: '.aaa',
      //   background: 'orange'
      // });
      // this.$nextTick(() => {
      //   Loading.service().close();
      // });
      console.log('当前环境', process.env.NODE_ENV, envConfig)
    }
  }
</script>

<style>
  #app {}
</style>