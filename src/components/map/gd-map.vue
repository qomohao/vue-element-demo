<template>
  <div class="gd-map">
    <div id="map-box"></div>
  </div>
</template>

<script>
import AMap from "AMap"
export default {
  name: "gd-map",
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      new AMap.Map("map-box", {
        center: [113.996756,33.858005],
        resizeEnable: false, //是否监控地图容器尺寸变化
        // mapStyle: 'amap://styles/6e42cce62ce626bc3ff17ce5d235f05c',
        mapStyle: 'amap://styles/1379dab8eb15ef0e34945e38297847e4',
        zoom: 10
      });
    },
  },
};
</script>
<style lang="less" scoped>
.gd-map {
  #map-box {
    width: 100%;
    height: 100%;
  }
}
</style>