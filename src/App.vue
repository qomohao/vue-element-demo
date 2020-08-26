<template>
  <div id="app">
    VUE
  </div>
</template>

<script>
  export default {
    name: 'App',
     mounted(){
    console.log(process.env.NODE_ENV)
  },
  }
</script>

<style>
  #app {}
</style>