<template>
    <RouterLink class="movie__link" :to="`/movie/${movie.imdbID}`">
        <div class="movie__wrap">
            <img class="movie__image" :src="movie.Poster" :alt="movie.Title">
            <div class="movie__info">
                <h4 class="movie__title">{{ movie.Title }}</h4>
                <span class="movie__text">{{ movie.Type }}</span>
                <span class="movie__text">{{ movie.Year }}</span>
            </div>
        </div>
    </RouterLink>
</template>

<script lang="ts">
import type { ShortMovieType } from '@/stores/movieStore';
import type { PropType } from 'vue';

export default {

    props: {
        movie: {
            type: Object as PropType<ShortMovieType>,
            required: true
        }
    }
};
</script>

<style scoped>
.movie__link {
    text-decoration: none;
    transition: scale .4s;
}

.movie__link:hover {
    scale: 0.95;
}

.movie__wrap {
    display: flex;
    background-color: black;
    border-radius: 10px;
    overflow: hidden;
    height: 100%;
    max-height: 300px;
    color: white;
}

.movie__image {
    object-fit: cover;
    width: 40%;
    max-width: 250px;
}

.movie__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 20px;
    align-self: center;
}

.movie__title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    text-decoration: underline;
}

.movie__text {
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
}
</style>