<template>
  <div class="media-video">
    <h1>H5视频</h1>
    <p>比例：16/9</p>
    <div class="video-box flex">
      <div class="video-item">
        <video :src="videoData" controls></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "media-video",
  data() {
    return {
      videoData: require("@/assets/media/video/demo.mp4"),
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.media-video {
  .video-box {
      display: flex;
      justify-content: center;
      position: relative;
      padding-top: 57%;
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
      }
    }
  }
</style>
