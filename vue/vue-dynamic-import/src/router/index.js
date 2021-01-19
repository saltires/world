import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Knight from '@/views/knight.vue'
import Kindom from '@/views/kindom.vue'
import Cross from '@/views/cross.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/knight',
        name: 'knight',
        component: Knight
    },
    {
        path: '/kindom',
        name: 'kindom',
        component: Kindom
    },
    {
        path: '/cross',
        name: 'cross',
        component: Cross
    }
]

const router = new VueRouter({
	routes: routes
})

export default router