import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue';
import GithubProfile from '@/components/GithubProfile.vue';
import Error from '@/components/Error.vue';
import GithubRepo from '@/components/GithubRepo.vue';

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: '/:catchAll(.*)',
        component: Error,
    },
    {
        path: '/myrepos',
        component: GithubProfile,
    },
    {
        path: '/githubrepo',
        component: GithubRepo
    }

]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes,
})

export default router;