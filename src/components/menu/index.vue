<template>
  <div class="index">
    <div @click="isCollapse=!isCollapse" class="logo-box bg-red flex justify-between align-center">
      <img :src="imgs.logo" class="logo">
      {{ENV}}环境
    </div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>图形</span>
            </template>
            <el-menu-item index="1-1" @click="goToPage('echarts')">
              <i class="el-icon-setting"></i>
              <span slot="title">插件</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-setting"></i>
              <span slot="title">原生</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>富文本</span>
            </template>
            <el-menu-item index="1-1">WangEditer</el-menu-item>
            <el-menu-item index="1-2">原生</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      ENV: process.env.NODE_ENV,
      isCollapse: false,
      imgs: {
        logo: require('@/assets/imgs/avatar.png')
      }
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.index {
  /deep/ .el-menu {
    border:none;
  }
  .logo-box {
    padding: 10px 5px;
    .logo {
      width:50px;
      height:50px;
      border:2px solid #f6f6f6;
      border-radius:5px;
      overflow: hidden;
    }
  }
}
</style>
