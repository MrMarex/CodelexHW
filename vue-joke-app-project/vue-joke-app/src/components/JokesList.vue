<template>
    <div v-if="!data">Loading...</div>
    <div class="jokes-list" v-if="data">
        <div class="empty" v-if="!data.jokes.length">There are no jokes</div>
        <div v-for="joke in data.jokes" v-bind:key="joke.id">
            <div class="joke">
                <div class="joke__joke">
                    {{ joke.joke }}
                </div>
                <button class="joke__btn btn--delete" @click="addToFavourites(joke)">Add to favourites</button>
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
        async fetchData() {
            const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single&amount=10");
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
        this.fetchData();
    },
};
</script>
  