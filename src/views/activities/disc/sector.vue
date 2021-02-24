<template>
  <div class="sector qwe">
    <div class="sector-item sector-item1 qwee">
      <span>111</span>
    </div>
    <div class="sector-item sector-item2 qwee">
      <span>22</span>
    </div>
    <div class="sector-item sector-item3 qwee">
      <span>33</span>
    </div>
    <div class="sector-item sector-item4 qwee">
      <span>44</span>
    </div>
    <div class="sector-item sector-item5 qwee">
      <span>55</span>
    </div>
    <div class="sector-item sector-item6 qwee">
      <span>66</span>
    </div>
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
    // text-align: center;
    span {
      display: block;
      transform-origin: center;
      transform:skewY(30deg)
    }
  }
  .sector-item1 {
    transform: rotate(0deg) skewY(-30deg);
    background: red;
    span {
      
    }
  }
  .sector-item2 {
    transform: rotate(60deg) skewY(-30deg);
    background: orange;
    span {
      // transform: rotate(111deg);
    }
  }
  .sector-item3 {
    transform: rotate(120deg) skewY(-30deg);
    background: red;
    span {
      // transform: rotate(111deg);
    }
  }
  .sector-item4 {
    transform: rotate(180deg) skewY(-30deg);
    background: orange;
    span {
      // transform: rotate(111deg);
    }
  }
  .sector-item5 {
    transform: rotate(240deg) skewY(-30deg);
    background: red;
    span {
      // transform: rotate(111deg);
    }
  }
  .sector-item6 {
    transform: rotate(300deg) skewY(-30deg);
    background: orange;
    span {
      // transform: rotate(111deg);
    }
  }
  
}
</style>
