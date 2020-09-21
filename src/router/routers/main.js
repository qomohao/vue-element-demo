export default[{
    path: '/',
    name: "index",
    meta: {
        title: '主页'
    },
    // redirect: "",
    component: () => import('@/views/index.vue'),
    children: []
}]