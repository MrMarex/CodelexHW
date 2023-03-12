<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    background-color: black;
    color: white;
    border: 1px solid black;
}

.button:hover {
    background-color: white;
    color: black;
}

.button:disabled {
    scale: 100%;
    cursor: not-allowed;
    opacity: .5;
}
</style>