import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Mahasiswa from '../pages/Mahasiswa.vue'
import Tentang from '../pages/Tentang.vue'
import Login from '../pages/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/mahasiswa',
            component: Mahasiswa
        },
        {
            path: '/tentang',
            component: Tentang
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router