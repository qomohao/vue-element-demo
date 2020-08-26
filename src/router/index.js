import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * nprogress
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * 重写路由的push方法 ，解除重复点击报错
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
/**
 * 重写路由的replace方法 ，解除重复点击报错
 */
const routerReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return routerReplace.call(this, location).catch(error => error)
}

Vue.use(VueRouter);


/**
 * 路由列表
 */

let routerArr = []
const files = require.context('./routers', false, /\.js$/);
files.keys().forEach(v => {
    // if (v == './index.js') return;
    routerArr.push(...files(v).default)
})
console.log('routerArr', routerArr)
const router = new VueRouter({
    mode: 'history',
    // 页面滚动行为
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         if (from.meta.keepAlive) {
    //             from.meta.savedPosition = document.body.scrollTop;
    //         }
    //         return {
    //             x: 0,
    //             y: to.meta.savedPosition || 0
    //         }
    //     }
    // }
})

// 前置守卫
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
})

// 后置守卫
router.afterEach((to, from, next) => {
    NProgress.done();
})
export default router;