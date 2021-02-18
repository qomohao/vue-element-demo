<template>
  <div id="app">
  
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading } from "element-ui";
import envConfig from "@/libs/envConfig";
export default {
  name: "App",
  beforeCreate() {
    Loading.service({
      text: "Page loading...",
    });
  },
  created() {
    Loading.service().close();
    console.log("当前环境", process.env.NODE_ENV, envConfig);
  },
};
</script>

<style>
#app {
}
</style>