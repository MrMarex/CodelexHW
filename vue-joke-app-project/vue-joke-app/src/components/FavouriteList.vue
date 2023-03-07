<template>
  <div v-if="!data">Loading...</div>
  <div class="jokes-list" v-if="data">
    <div class="empty" v-if="!data.length">List is empty</div>
    <div v-for="joke in data" v-bind:key="joke.id">
      <div class="joke">
        <div class="joke__joke">
          {{ joke.joke }}
        </div>
        <button class="joke__btn btn--delete" @click="deleteJoke(joke.id)">Delete</button>
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
      const response = await fetch("http://localhost:3004/jokes");
      this.data = await response.json();
      console.log(this.data)
    },
    async deleteJoke(id) {
      await axios.delete(`http://localhost:3004/jokes/${id}`);
      await this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.jokes-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.joke {
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
}
</style>