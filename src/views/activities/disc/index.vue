<template>
  <div class="index">
    <h1>幸运转盘</h1>
    <div class="content qwe">
      <sector></sector>
    </div>
  </div>
</template>

<script>
import sector from './sector.vue'
export default {
  name: "index",
  data() {
    return {}
  },

  components: { sector },

  computed: {},

  mounted() {},

  methods: {},
}
</script>
<style lang="less" scoped>
.index {
}
</style>
