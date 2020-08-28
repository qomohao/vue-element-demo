export default [{
    path: '/',
    name: "index",
    meta: {
        title: '主页'
    },
    redirect: "user-list",
    component: () => import('@/views/main/index.vue'),
    children: [{
        path: 'user-list',
        name: 'user-list',
        component: () => import('@/views/main/user-list.vue'),
    },
    {
        path: 'position',
        name: 'position',
        component: () => import('@/views/main/position.vue'),
    },{
        path: 'collection',
        name: 'collection',
        component: () => import('@/views/main/collection.vue'),
    },{
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/main/setting.vue'),
    },  ]
}]