<script setup lang="ts">
  import FetchData from "../components/JokesList.vue";
</script>

<template>
  <main class="jokes-page">
    <FetchData />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .jokes-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
}
</style>
