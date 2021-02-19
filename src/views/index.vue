<template>
  <div class="index flex justify-between">
    <menu-box class="menu-box"></menu-box>
    <div class="content-box qwee">
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
  // color:@text-color;
  .menu-box {
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    // background: @bg-color;
  }
  .content-box {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 10px;
  }
}
</style>