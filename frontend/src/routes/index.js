import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import ForgotPassword from '../views/auth/ForgotPassword.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //auth
        {
            path: "/",
            name: "login",
            component: Login,
            meta: {
                title: "Welcome",
            },
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                title: "Register",
            },
        },
        {
            path: "/forgot",
            name: "forgot",
            component: ForgotPassword,
            meta: {
                title: "Forgot Password",
            },
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = `MOVEON! || ${to.meta.title}`;
    next();
});

export default router;