export default [
    {
        name: "index",
        path: '/aaa',
        meta: {
            title: '主页'
        },
        redirect: "/aaa/test",
        component: () => import('@/views/index.vue'),
        children: [{
            path: 'test',
            name: 'test',
            component: () => import('@/views/main/test.vue')
        }]
    }
]