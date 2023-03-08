<script setup lang="ts">
import FetchData from "../components/FavouriteList.vue";
</script>

<template>
  <div class="favourites">
    <h1 class="heading">Your list of best jokes.</h1>
    <FetchData />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .favourites {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }

  .heading{
    color: black;
    margin-bottom: 20px;
  }
}
</style>
