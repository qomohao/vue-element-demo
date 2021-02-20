export default [{
    path: '/activities',
    name: 'activities',
    component: () => import('@/views/index.vue'),
    children: [{
        path: 'fruit-machine',
        name: 'fruit-machine',
        component: () => import('@/views/activities/fruit-machine.vue')
    }]
}]