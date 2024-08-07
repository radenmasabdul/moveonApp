import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/auth/Login.vue';

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
    ]
})

router.beforeEach((to, from, next) => {
    document.title = `MOVEON! || ${to.meta.title}`;
    next();
});

export default router;