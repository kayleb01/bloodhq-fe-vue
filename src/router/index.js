import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Signin.vue'

const routes = [{
        path: '/',
        name: 'Signin',
        component: Home
    },
    {
        path: '/createaccount',
        name: 'Createaccount',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/CreateAccount.vue')
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Dashboard.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router