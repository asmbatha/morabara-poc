import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Morabaraba from './views/Morabaraba.vue'
import EditMorabaraba from './views/EditMorabaraba.vue'
import SelectBoard from './views/SelectBoard.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/select_board',
            name: 'SelectBoard',
            component: SelectBoard
        },
        {
            path: '/morabaraba',
            name: 'Morabaraba',
            component: Morabaraba
        },
        {
            path: '/edit_morabaraba',
            name: 'EditMorabaraba',
            component: EditMorabaraba
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/x40/:gameId?',
            props: true,
            component: () => import(/* webpackChunkName: "x40" */ './views/boards/x40/Game.vue')
        },
        {
            path: '/y40/:gameId?',
            props: true,
            component: () => import(/* webpackChunkName: "x40" */ './views/boards/y40/Game.vue')
        }
    ]
})

