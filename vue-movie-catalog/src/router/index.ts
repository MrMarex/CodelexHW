import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MoviesView from '../views/MoviesView.vue';
import MovieView from '../views/MovieView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/movies',
            name: 'movies',
            component: MoviesView
        },
        {
            path: '/movie/:id',
            name: 'movie',
            component: MovieView
        },
    ]
});

export default router;