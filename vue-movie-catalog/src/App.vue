<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <header>
        <div class="navigation">
            <NavBar />
        </div>
    </header>
    <main class="container">
        <RouterView />
    </main>
</template>

<script lang="ts">
import NavBar from './components/Navbar.vue';
export default {
    components: {
        NavBar
    }
};
</script>