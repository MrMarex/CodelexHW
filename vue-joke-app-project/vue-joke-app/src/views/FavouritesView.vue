<script setup lang="ts">
import FetchData from "../components/FavouriteList.vue";
</script>

<template>
  <div class="favourites">
    <FetchData />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .favourites {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
}
</style>
