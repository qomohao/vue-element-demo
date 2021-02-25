<template>
  <div class="sector-item">
    <div class="round-box flex">
      <div class="sector-left"></div>
      <div class="sector-right">
        <div class="sector-content">111<br />222<br />33</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sector-item",
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
.sector-item {
  margin: 100px;
  .round-box {
    width: 200px;
    height: 200px;
    background: orange;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    border: 2px solid #f6f6f6;
    .sector-left {
      width: 100px;
      height: 200px;
      background: green;
    }
    .sector-right {
      width: 100px;
      height: 200px;
      transform: rotate(60deg);
      transform-origin: left center;
      background: red;
      position: relative;
      .sector-content {
        position: absolute;
        top: 0;
        left: -60px;
        width: 60px;
        padding: 20px 0;
        transform: rotate(-30deg);
        transform-origin: center;
        background: transparent;
        text-align: center;
      }
    }
  }
}
</style>
