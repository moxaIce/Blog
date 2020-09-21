
import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../view/login/index.vue';
import Home from '../view/home/index.vue';
import List from '../view/list/index.vue';
import Layout from '../view/layout/index.vue';
import Blog from '../view/home/new.vue';
const routerHistory = createWebHashHistory();

export const routerNav = [
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/list',
        component: List,
        meta: {
            title: '列表页'
        }
    }
]


export const routerMap = [
    {
        path: '/',
        component: Login,
        meta: {
            hide: true
        }
    },
    {
        path: '/documentation',
        component: Layout,
        redirect: '/home',
        children: routerNav
    },
    {
        path: '/blog/:id',
        component: Blog,
        meta: {
            title: '新建'
        }
    }

]

const router = createRouter({
    history: routerHistory,
    routes: routerMap
});



export default router