import Vue from "vue"
import Clipboard from 'clipboard';

Vue.mixin({
  data() {
    return {
      imgUrl: 'http://127.0.0.1:3000/upload/',
    }
  },

  methods: {
    /**
     * 页面跳转
     * @param { String } pathName 页面pathName
     * @param { Object } queryObj 页面参数
     */
    goToPage(pathName, queryObj = {}, params = {}) {
      this.$router.push({
        name: pathName,
        query: queryObj,
        params
      });
    },
    /**
     * 页面跳转
     * @param { String } pathName 页面pathName
     * @param { Object } queryObj 页面参数
     */
    goToReplace(pathName, queryObj = {}, params = {}) {
      this.$router.replace({
        name: pathName,
        query: queryObj,
        params
      });
    },
    /**
     *时间格式转换
     */
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    },
    // 复制
    $copy(e, text) {
      console.log(11)
       let  clipboard = new Clipboard(e.target, { text: () => text });
      clipboard.on("success", e => {
        this.$message.success("复制成功");
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        this.$message.warning("该浏览器不支持自动复制");
        // 释放内存
        clipboard.destroy();
      });
    }
  }
})