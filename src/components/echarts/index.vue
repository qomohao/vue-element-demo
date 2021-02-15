<template>
  <div class="index">
    <div id="myChart" :style="chartStyle"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: ['style', 'data'],
  data() {
    return {
      chartStyle: {
        width: this.style.width || '100%',
        height: this.style.height || '100%'
      }
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
  .index{

  }
</style>
