export default [{
    path: '/',
    name: "home",
    meta: {
        title: '主页'
    },
    redirect: "echarts-index",
    component: () => import('@/views/index.vue'),
    children: [
        /**
         * 图表
         */
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
        /**
         * CSS
         */
        {
            path: '/css-effects',
            name: "css-effects",
            meta: {
                title: 'css-effects'
            },
            component: () => import('@/views/css-effects/index.vue')
        },
        /**
         * 富文本
         */
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
        /**
         * 地图
         */
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
        /**
         * 即时通讯
         */
        {
            path: '/communication',
            name: "communication",
            meta: {
                title: 'communication'
            },
            component: () => import('@/views/communication/index.vue')
        },
        /**
         * 表格
         */
        {
            path: '/menu-table',
            name: "menu-table",
            meta: {
                title: 'menu-table'
            },
            component: () => import('@/views/table/index.vue')
        },
        /**
         * media
         */
        {
            path: '/media-audio',
            name: "media-audio",
            meta: {
                title: 'menu-audio'
            },
            component: () => import('@/views/media/media-audio.vue')
        },
        {
            path: '/media-video',
            name: "media-video",
            meta: {
                title: 'media-video'
            },
            component: () => import('@/views/media/media-video.vue')
        },
        {
            path: '/media-live',
            name: "media-live",
            meta: {
                title: 'media-live'
            },
            component: () => import('@/views/media/media-live.vue')
        }
    ]
}]