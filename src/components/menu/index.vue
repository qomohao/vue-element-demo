<template>
  <div class="index bg-menu">
    <el-row class="tac">
      <el-col>
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
          <div
            @click="isCollapse = !isCollapse"
            class="logo-box flex justify-between align-center pointer"
            :class="isCollapse ? 'logo-box-sm' : ''"
          >
            <img :src="imgs.logo" class="logo" />
            <span v-if="!isCollapse">{{ ENV }}环境</span>
          </div>
          <el-menu-item index="1" @click="goToPage('home')">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>图形</span>
            </template>
            <el-menu-item index="2-1" @click="goToPage('echarts-index')">
              <i class="el-icon-setting"></i>
              <span>插件</span>
            </el-menu-item>
            <el-menu-item index="2-2" @click="goToPage('echarts-original')">
              <i class="el-icon-setting"></i>
              <span>原生</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3" @click="goToPage('css-effects')">
            <i class="el-icon-menu"></i>
            <span slot="title">CSS</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>富文本</span>
            </template>
            <el-menu-item index="4-1" @click="goToPage('wang-editer')">
              <i class="iconfont icon-chartLine"></i>
              <span>WangEditer</span>
            </el-menu-item>
            <el-menu-item index="4-2" @click="goToPage('qill-editer')">
              <i class="iconfont icon-chartLine"></i>
              <span>Vue-Quill-Editor</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>地图</span>
            </template>
            <el-menu-item index="5-1" @click="goToPage('gd-map')">
              <i class="iconfont icon-chartLine"></i>
              <span>高德地图</span>
            </el-menu-item>
            <el-menu-item index="5-2" @click="goToPage('bd-map')">
              <i class="iconfont icon-chartLine"></i>
              <span>百度地图</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="6" @click="goToPage('communication')">
            <i class="el-icon-menu"></i>
            <span slot="title">即时通讯</span>
          </el-menu-item>
          <el-menu-item index="7" @click="goToPage('menu-table')">
            <i class="el-icon-menu"></i>
            <span slot="title">表格</span>
          </el-menu-item>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>音视频</span>
            </template>
            <el-menu-item index="8-1" @click="goToPage('media-audio')">
              <i class="iconfont icon-chartLine"></i>
              <span>音频</span>
            </el-menu-item>
            <el-menu-item index="8-2" @click="goToPage('media-video')">
              <i class="iconfont icon-chartLine"></i>
              <span>视频</span>
            </el-menu-item>
            <el-menu-item index="8-3" @click="goToPage('media-live')">
              <i class="iconfont icon-chartLine"></i>
              <span>live</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>活动常用</span>
            </template>
            <el-menu-item index="9-1" @click="goToPage('fruit-machine')">
              <i class="iconfont icon-chartLine"></i>
              <span>水果机</span>
            </el-menu-item>
            <el-menu-item index="9-2" @click="goToPage('')">
              <i class="iconfont icon-chartLine"></i>
              <span>转盘抽奖</span>
            </el-menu-item>
            <el-menu-item index="9-3" @click="goToPage('media-live')">
              <i class="iconfont icon-chartLine"></i>
              <span>红包雨</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="10" @click="goToPage('')">
            <i class="el-icon-menu"></i>
            <span slot="title">剪切工具</span>
          </el-menu-item>
          <el-menu-item index="11" @click="goToPage('')">
            <i class="el-icon-menu"></i>
            <span slot="title">树</span>
          </el-menu-item>
          <el-menu-item index="12" @click="goToPage('')">
            <i class="el-icon-menu"></i>
            <span slot="title">功能引导</span>
          </el-menu-item>
          <el-menu-item index="13" @click="goToPage('')">
            <i class="el-icon-menu"></i>
            <span slot="title">介绍</span>
          </el-menu-item>
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
        logo: require("@/assets/imgs/avatar.png"),
      },
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
    border: none;
  }
  .logo-box {
    padding: 10px 20px;
    color: #fff;
    .logo {
      width: 50px;
      height: 50px;
      border: 2px solid #f6f6f6;
      border-radius: 5px;
      overflow: hidden;
    }
  }
  .logo-box-sm {
    padding: 10px 0;
    justify-content: center;
  }
}
</style>
