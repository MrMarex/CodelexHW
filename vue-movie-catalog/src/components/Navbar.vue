<template>
    <nav class="navigation__wrap">
        <RouterLink to="/" class="navigation__link">| Home |</RouterLink>
        <RouterLink to="/movies" class="navigation__link">| Movies |</RouterLink>
    </nav>
</template>

<style scoped>
.navigation__wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: rgba(0, 0, 0, 0.7);
}

.navigation__link {
    text-decoration: none;
    color: white;
    font-size: 30px;
    font-weight: 500;
    
}

.navigation__link:hover {
    color: black;
}
</style>