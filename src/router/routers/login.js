export default [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
}, {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/register.vue')
}]