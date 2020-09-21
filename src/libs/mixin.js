import Vue from "vue"

Vue.mixin({
  data() {
    return {
       
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
     * 页面reload
     */
    reload() {
      location.href=location.href.split('#')[0]
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
    }
  }
})