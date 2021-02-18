export default[
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    },
    {
    path: '/',
    name: "home",
    meta: {
        title: '主页'
    },
    // redirect: "",
    component: () => import('@/views/index.vue'),
    children: [
        {
            path: '/echarts-index',
            name: "echarts-index",
            meta: {
                title: 'echarts-index'
            },
            component: () => import('@/views/charts/index.vue')
        },
        {
            path: '/echarts-original',
            name: "echarts-original",
            meta: {
                title: 'echarts-original'
            },
            component: () => import('@/views/charts/original.vue')
        },
        {
            path: '/css-effects',
            name: "css-effects",
            meta: {
                title: 'wang-editer'
            },
            component: () => import('@/views/css-effects/index.vue')
        },
        {
            path: '/wang-editer',
            name: "wang-editer",
            meta: {
                title: 'wang-editer'
            },
            component: () => import('@/views/editer/wang-editer.vue')
        },
        {
            path: '/qill-editer',
            name: "qill-editer",
            meta: {
                title: 'qill-editer'
            },
            component: () => import('@/views/editer/qill-editer.vue')
        },
        {
            path: '/gd-map',
            name: "gd-map",
            meta: {
                title: 'gd-map'
            },
            component: () => import('@/views/map/gd-map.vue')
        },
        {
            path: '/bd-map',
            name: "bd-map",
            meta: {
                title: 'bd-map'
            },
            component: () => import('@/views/map/bd-map.vue')
        },
        {
            path: '/communication',
            name: "communication",
            meta: {
                title: 'communication'
            },
            component: () => import('@/views/communication/index.vue')
        },
        {
            path: '/menu-table',
            name: "menu-table",
            meta: {
                title: 'menu-table'
            },
            component: () => import('@/views/table/index.vue')
        },
        {
            path: '/menu-audio',
            name: "menu-audio",
            meta: {
                title: 'menu-audio'
            },
            component: () => import('@/views/media/audio.vue')
        },
        {
            path: '/menu-video',
            name: "menu-video",
            meta: {
                title: 'menu-video'
            },
            component: () => import('@/views/media/video.vue')
        }
    ]
}]