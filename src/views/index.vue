<template>
  <div class="index flex justify-between">
    <menu-box class="menu-box qwe"></menu-box>
    <div class="content-box qwee">
      <h1>11111</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menuBox from '@/components/menu'
export default {
  name: "index",
  data() {
    return {};
  },

  components: { menuBox },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>

.index {
  height:100vh;
  color:@text-color;
  .menu-box {
    width: 300px;
    height: 100%;
    background: @bg-color;
  }
  .content-box {
    width: calc(100% - 300px);
    height: 100%;
    overflow-y: scroll;
  }
}
</style>