<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <div class="header__logo">
      <img alt="App logo" class="logo" src="@/assets/AppLogo.png" width="45" height="45" />
    </div>
    <div class="wrapper">
      <nav class="navbar__wrap">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/drumkit">Drumkit</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  margin-top: 10px;
  border-radius: 15px;
}

a {
  text-decoration: none;
  color: white;
  background-color: white;
  color: black;
  padding: 10px;
  margin-left: 30px;
  border-radius: 10px;
}

.navbar__wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
