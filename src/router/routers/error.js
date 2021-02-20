export default [{
    path: "*",
    redirect: "/404"
}, {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
}, {
    path: '/500',
    name: '500',
    component: () => import('@/views/error/500.vue')
}]