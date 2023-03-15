<template>
    <div class="loading-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
  
<style scoped>
.loading-container {
    width: 80px;
    height: 80px;
    margin: 0 auto;
}

.loading-container div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.loading-container div:nth-child(1) {
    left: 8px;
    animation: loading-container1 0.6s infinite;
}

.loading-container div:nth-child(2) {
    left: 8px;
    animation: loading-container2 0.6s infinite;
}

.loading-container div:nth-child(3) {
    left: 32px;
    animation: loading-container2 0.6s infinite;
}

.loading-container div:nth-child(4) {
    left: 56px;
    animation: loading-container3 0.6s infinite;
}

@keyframes loading-container1 {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes loading-container3 {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes loading-container2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(24px, 0);
    }
}
</style>