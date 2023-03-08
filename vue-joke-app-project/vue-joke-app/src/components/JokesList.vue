<template>
    <div class="container">
        <h1 class="heading">Joke list.</h1>
        <h2 class="category-chose">Chose, what type of jokes You want to see:</h2>
        <div class="search-filter">
            <button class="search-filter__btn" @click="fetchData('Any')">Any</button>
            <button class="search-filter__btn" @click="fetchData('Programming')">Programming</button>
            <button class="search-filter__btn" @click="fetchData('Dark')">Dark</button>
            <button class="search-filter__btn" @click="fetchData('Pun')">Pun</button>
            <button class="search-filter__btn" @click="fetchData('Miscellaneous')">Misc</button>
        </div>
        <div v-if="!data">Loading...</div>
        <div class="jokes-list" v-if="data">
            <div class="empty" v-if="!data.jokes.length">There are no jokes</div>
            <div v-for="joke in data.jokes" v-bind:key="joke.id">
                <div class="joke">
                    <div class="joke__joke">
                        [{{ joke.category }}] {{ joke.joke }}
                    </div>
                    <button class="joke__btn btn--delete" @click="addToFavourites(joke)">Add to favourites</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            data: null,
        };
    },
    methods: {
        async fetchData(category) {
            const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=single&amount=10`);
            this.data = await response.json();
        },
        addToFavourites(joke) {
            axios.post("http://localhost:3004/jokes", joke)
                .then((response) => {
                    console.log(response.data);
                    alert("Joke added to favourites!");
                })
                .catch((error) => {
                    console.log(error.response.data);
                    alert(error.response.data);
                });
        },
    },
    mounted() {
        this.fetchData('Any');
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.heading {
    text-align: center;
    color: black;
}

.category-chose {
    color: black;
    font-size: 20px;
    text-decoration: underline;
}

.search-filter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border: 3px solid black;
    border-radius: 10px;
    margin: 10px auto;
    width: 70%;
}

.search-filter__btn {
    padding: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid white;
}</style>