import { defineStore } from 'pinia';
import axios from 'axios';

type RatingType = {
    Source: string;
    Value: string;
}

type FullMovieType = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: RatingType[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
    totalSeasons?: number,
}

export type ShortMovieType = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

type MovieResponseType = {
    Response: string;
    Search: ShortMovieType[];
    totalResults: string;
}

export const useMovieStore = defineStore('counter', {
    state: () => ({
        moviesList: [] as ShortMovieType[],
        movieResult: 0,
        movieById: {} as FullMovieType,
        currentPage: 1,
        isLoading: false
    }),
    getters: {
        pageCount(): number {
            const moviesPerPage = 10;
            const movies = this.movieResult;
            const pages = Math.ceil(movies / moviesPerPage);

            if (movies % moviesPerPage === 0) {
                return pages - 1;
            }
            return pages;
        }
    },
    actions: {
        loadMovies(search: string, page = 1) {
            this.isLoading = true;
            axios.get<MovieResponseType>(`http://www.omdbapi.com/?s=${search}&page=${page}&apikey=ec80f3ae`).then(({ data }) => {
                this.moviesList = data.Search;
                this.movieResult = Number(data.totalResults);
                this.isLoading = false;
            });
        },
        loadMovie(id: string) {
            this.isLoading = true;
            axios.get(`http://www.omdbapi.com/?i=${id}&apikey=ec80f3ae`).then(({ data }) => {
                this.movieById = data;
                this.isLoading = false;
            });
        }
    },
});