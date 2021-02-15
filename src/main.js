import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * ElementUI
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

/**
 * 引入全局css样式
 */
import '@/assets/style/reset.less'
import '@/assets/style/common.less'
import contentType from '@/assets/constants/theme.js'
const themeType = localStorage.getItem('themeType') || contentType.DEFAULT
console.log("当前主题====", themeType)
// import '@/assets/style/theme/default.less'

/**
 * mixin
 */
import '@/libs/mixin';

/**
 * 引入路由
 */
import router from './router/index'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
