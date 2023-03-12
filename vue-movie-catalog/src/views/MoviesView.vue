<template>
    <div class="wrapper">
        <div>
            <span class="text">
                You can find your wanted movie or series here. Just type title and search!
            </span>
        </div>
        <SearchBar @search="searchMovies" />
        <CustomLoader v-if="isLoading" class="loader" />
        <div v-else>
            <MovieList :movies="movies" :key="currentPage" v-if="moviesCount && page" />
            <span class="text" v-else>
                No movies loaded!
            </span>
            <Pagination v-if="moviesCount && page" :currentPage="currentPage" :pageCount="pageCount" @nextPage="nextPage"
                @prevPage="prevPage" />
        </div>
    </div>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore';
import { computed } from 'vue';

import MovieList from '@/components/MovieList.vue';
import SearchBar from '@/components/SearchBar.vue';
import Pagination from '@/components/Pagination.vue';
import CustomLoader from '@/components/Inputs/CustomLoader.vue';

export default {
    setup() {
        const movie = useMovieStore();
        return {
            movies: computed(() => movie.moviesList),
            loadMovies: movie.loadMovies,
            moviesCount: computed(() => movie.movieResult),
            pageCount: computed(() => movie.pageCount),
            currentPage: movie.currentPage,
            isLoading: computed(() => movie.isLoading),
        };
    },
    components: {
        MovieList,
        SearchBar,
        Pagination,
        CustomLoader,
    },
    methods: {
        searchMovies(search: string) {
            this.currentPage = 1;
            this.loadMovies(search, this.currentPage);
        },
        loadMoviesFn() {
            this.loadMovies(this.searchParam, this.currentPage);
        },
        pageButtonHandler() {
            this.$router.push({ path: '/movies', query: { param: this.searchParam, page: this.currentPage } });
            this.loadMoviesFn();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        nextPage() {
            this.currentPage++;
            this.pageButtonHandler();
        },
        prevPage() {
            this.currentPage--;
            this.pageButtonHandler();
        },
    },
    mounted() {
        if (this.page && this.searchParam) {
            this.currentPage = Number(this.page);
            this.loadMoviesFn();
        }
    },
    data() {
        return {
            page: computed(() => this.$route.query.page),
            searchParam: computed(() => this.$route.query.param as string),
        };
    }
};
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.text {
    font-size: 30px;
    font-weight: 500;
    color: black;
}
</style>