<template>
  <div class="index">
    <h1>幸运转盘</h1>
    <div class="content">
      <!-- <sector></sector> -->
      <!-- <sector-item></sector-item> -->
      <canvas-sector></canvas-sector>
    </div>
  </div>
</template>

<script>
import sector from "./sector.vue";
import sectorItem from "./sector-item.vue";
import canvasSector from "./canvas-sector.vue";
export default {
  name: "index",
  data() {
    return {};
  },

  components: { sector, sectorItem, canvasSector },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.index {
}
</style>
