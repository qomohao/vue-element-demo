<template>
  <div class="gd-map">
    <h1>高德地图</h1>
    <gd-map-box class="map-box"></gd-map-box>
  </div>
</template>

<script>
import gdMapBox from '@/components/map/gd-map.vue'
export default {
  name: "gd-map",
  data() {
    return {}
  },

  components: { gdMapBox },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
  .gd-map{
    .map-box {
      width:100%;
      height:100vh;
    }
  }
</style>
