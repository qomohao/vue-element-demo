<template>
  <div class="fruit-item qwe" :style="fruitStyle">
    <div class="flex justify-center align-center">
      <div class="ellipsis-row-2">{{fruitInfo && fruitInfo.name || '我是一个水果啊我是一个水果啊我是一个水果啊'}} * {{fruitInfo && fruitInfo.double}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fruit-item",
  data() {
    return {}
  },
  props: {
    fruitStyle: {
      default: function() {
        return {
          width: '100px',
          height: '100px'
        }
      }
    },
    fruitInfo: {
      name: null,
      double: null,
      sort: null,
    }
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.fruit-item {
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  >div {
    width: 100%;
    height: 100%;
    background: orange;
    padding: 0 10px;
    border-radius: 10px;
  }
}
</style>
