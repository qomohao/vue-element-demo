import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@/assets/style/reset.less'
/**
 * vue-video-player
 */
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
/**
 * ElementUI
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/**
 * vue-cropper
 */
import VueCropper from 'vue-cropper'
Vue.use(VueCropper)
/**
 * vue-socket.io
 */
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  // 服务器端地址
  connection: 'http://localhost:3000',
  vuex: {}
}))
/**
 * mixin
 */
import '@/libs/mixin';
import "@/components/index";
/**
 * 引入路由
 */
import router from './router/index'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')