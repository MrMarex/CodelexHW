<template>
    <div class="movie-list">
        <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </div>
</template>

<script lang="ts">
import type { ShortMovieType } from '@/stores/movieStore';
import type { PropType } from 'vue';

import MovieItem from './MovieItem.vue';

export default {
    components: {
        MovieItem
    },
    props: {
        movies: {
            type: Array as PropType<ShortMovieType[]>,
            required: true
        }
    },
};
</script>

<style scoped>
.movie-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

@media (max-width: 850px) {
    .movie-list {
        grid-template-columns: 1fr;
    }
}
</style>