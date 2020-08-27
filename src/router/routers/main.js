export default [
    {
        path: '/',
        name: "index",
        meta: {
            title: '主页'
        },
        redirect: "test",
        component: () => import('@/views/index.vue'),
        children: [{
            path: 'test',
            name: 'test',
            component: () => import('@/views/main/test.vue')
        },{
            path: 'chat',
            name: 'chat',
            component: () => import('@/views/main/chat.vue')
        }]
    }
]