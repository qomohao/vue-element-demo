<template>
  <div class="login flex justify-end align-center">
    <transition name="slide-fade">
      <div class="main qwe">
        <h1>register Page</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "login",
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
.login {
  height: 100vh;
  overflow: hidden;
  padding: 0 100px;
  .main {
    width: 400px;
    min-height: 60vh;
    background: #fff;
  }
}
</style>