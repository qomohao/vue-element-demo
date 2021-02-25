<template>
  <div class="sector">
    <div class="sector-item sector-item1"></div>
    <div class="sector-item sector-item2"></div>
    <div class="sector-item sector-item3"></div>
    <div class="sector-item sector-item4"></div>
    <div class="sector-item sector-item5"></div>
    <div class="sector-item sector-item6"></div>
  </div>
</template>

<script>
export default {
  name: "sector",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.sector {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 100px;
  position: relative;
  transform: rotate(30deg);
  overflow: hidden;
  .sector-item {
    position: absolute;
    top: 0; 
    right: 0;
    width: 50%;
    height: 50%;
    transform-origin: 0% 100%;
    padding: 50px;
  }
  .contenta {
    position: absolute;
    transform:rotateX(40deg) 
  }
  .sector-item1 {
    transform: rotate(0deg) skewY(-30deg);
    background: red;
  }
  .sector-item2 {
    transform: rotate(60deg) skewY(-30deg);
    background: orange;
  }
  .sector-item3 {
    transform: rotate(120deg) skewY(-30deg);
    background: red;
  }
  .sector-item4 {
    transform: rotate(180deg) skewY(-30deg);
    background: orange;
  }
  .sector-item5 {
    transform: rotate(240deg) skewY(-30deg);
    background: red;
  }
  .sector-item6 {
    transform: rotate(300deg) skewY(-30deg);
    background: orange;
  }
}
</style>
