import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

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
