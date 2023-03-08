<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Joke logo" class="logo" src="@/assets/logo.jpg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Joke App!" />

      <nav>
        <RouterLink to="/">Jokes</RouterLink>
        <RouterLink to="/favourites">Favourites</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap');

.jokes-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.joke {
  border: none;
  box-shadow: -10px 10px black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffb100;
  color: black;
  font-family: 'Signika Negative', sans-serif;
}

.joke__joke {
  width: 80%;
}

.joke__btn {
  border-radius: 15px;
  background-color: rgba(0, 0, 0);
  cursor: pointer;
  color: white;
  margin: 0 5px;
  border: 2px solid white;
  height: 40px;
  width: 20%;
}

.empty {
  font-size: 30px;
  text-align: center;
  color: white;
  text-decoration: underline;
}
</style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
