import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/views/ProjectView.vue')
        },

        {
            path: '/projects/:id',
            name: 'single-project',
            component: () => import('@/views/SingleProject.vue')
        }
    ]
});

export default router;
