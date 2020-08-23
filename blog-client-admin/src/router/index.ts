
import {createRouter, createWebHashHistory} from 'vue-router';
import Login from '../view/login/index.vue';

const routerHistory = createWebHashHistory();

export default createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            component: Login
        }
    ]
});