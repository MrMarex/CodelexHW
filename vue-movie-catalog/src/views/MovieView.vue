<template>
    <CustomLoader v-if="isLoading" class="loader" />
    <div v-else class="movie-page">
        <h1 class="title">{{ movie.Title }}</h1>
        <div class="header">
            <img class="header__image" :src="movie.Poster" :alt="movie.Title">
            <div class="header__content">
                <div class="header__rating">
                    <span class="header__title">Raitings:</span>
                    <div class="header__item-wrap">
                        <div class="header__rating-item" v-for="rating in movie.Ratings" :key="rating.Source">
                            <span class="header__rating-item-source">{{ rating.Source }}</span>
                            <span class="header__rating-item-value">{{ rating.Value }}</span>
                        </div>
                    </div>
                </div>
                <div class="header__item-wrap">
                    <span class="item-title">Date of release: </span>
                    <span class="item-text">{{ movie.Released }}</span>
                </div>
                <div class="header__item-wrap">
                    <span class="item-title">Run time: </span>
                    <span class="item-text">{{ movie.Runtime }}</span>
                </div>
                <div class="header__item-wrap">
                    <span class="item-title">Genres: </span>
                    <span class="item-text">{{ movie.Genre }}</span>
                </div>
                <div class="header__item-wrap">
                    <span class="item-title">Languages: </span>
                    <span class="item-text">{{ movie.Language }}</span>
                </div>
                <div class="header__item-wrap" v-if="movie.BoxOffice">
                    <span class="item-title">Box office: </span>
                    <span class="item-text">{{ movie.BoxOffice }}</span>
                </div>
                <div class="header__item-wrap">
                    <span class="item-title">Awards: </span>
                    <span class="item-text">{{ movie.Awards }}</span>
                </div>
                <div class="header__item-wrap" v-if="movie.totalSeasons">
                    <span class="item-title">Total seasons: </span>
                    <span class="item-text">{{ movie.totalSeasons }}</span>
                </div>
                <div class="header__item-wrap" v-if="movie.Website">
                    <span class="item-title">Website: </span>
                    <span class="item-text">{{ movie.Website }}</span>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main__item-wrap">
                <h6 class="title">Short description</h6>
                <p class="paragraph">{{ movie.Plot }}</p>
            </div>
            <h6 class="title">Cast and Crew </h6>
            <div class="main__item-wrap">
                <span class="item-title">Director:</span>
                <span class="item-text">{{ movie.Director }}</span>
            </div>
            <div class="main__item-wrap">
                <span class="item-title">Writer:</span>
                <span class="item-text">{{ movie.Writer }}</span>
            </div>
            <div class="main__item-wrap">
                <span class="item-title">Actors:</span>
                <span class="item-text">{{ movie.Actors }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore';
import { computed } from 'vue';
import CustomLoader from '@/components/Inputs/CustomLoader.vue';

export default {
    setup() {
        const movieStore = useMovieStore();
        const movie = useMovieStore();
        return {
            movie: computed(() => movieStore.movieById),
            loadMovie: movieStore.loadMovie,
            isLoading: computed(() => movie.isLoading),
        };
    },
    components: {
        CustomLoader,
    },
    mounted() {
        this.loadMovie(this.movieId);
    },
    data() {
        return {
            movieId: this.$route.params.id as string
        };
    }
};
</script>

<style scoped>
.movie-page {
    background-color: black;
    padding: 20px;
    color: white;
}

.title {
    font-size: 50px;
    text-align: center;
    font-weight: 700;
    text-decoration: underline;
}

.paragraph {
    font-size: 20px;
}

.header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    height: 80%;
    max-height: 450px;
    overflow: hidden;
}

.header__image {
    width: 100%;
    max-width: 300px;
    height: 100%;
    object-fit: cover;
}

.header__content {
    width: 100%;
}

.header__rating {
    display: flex;
    flex-direction: column;
}

.item-title {
    font-size: 20px;
    font-weight: 800;
}

.header__item-wrap {
    display: flex;
    gap: 30px;
    align-items: center;
}

.header__rating-item {
    text-align: center;
    display: flex;
    gap: 10px;
    flex-direction: column;
    border: 3px solid white;
    padding: 5px;
    border-radius: 10px;
    align-items: center;
    height: 100%;
}

.header__rating-item-source,
.header__rating-item-value {
    font-size: 20px;
}

.header__rating-item-value {
    font-weight: 700;
}

.item-text {
    font-size: 25px;
}

.main__item-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
}</style>