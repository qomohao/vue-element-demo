import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * ElementUI
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

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
