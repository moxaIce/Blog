
import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../view/login/index.vue';
import Home from '../view/home/index.vue'
const routerHistory = createWebHashHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            name:'home',
            path: '/home',
            component: Home
        }
    ]
});



export default router