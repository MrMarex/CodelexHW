<template>
    <div class="card__wrapper">
        <span class="card__text">-{{ cardTitle }}-</span>
        <div class="card__items">
            <span class="card__value">{{ typeof (cardValue) === 'number' ? Math.floor(cardValue) : cardValue }}</span>
            <span class="card__weather-unit" v-if="cardMeassureUnit">{{ cardMeassureUnit }}</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        cardTitle: {
            type: String,
            required: true,
        },
        cardValue: [
            Number,
            String
        ],
        cardMeassureUnit: [String]
    }
};
</script>

<style scoped>
.card__wrapper {
    background-color: #7ec5ff;
    color: #fff;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
}

.card__text {
    font-size: 25px;
    font-weight: bold;
}

.card__value {
    font-size: 35px;
    margin-top: 10px;
}

.card__weather-unit {
    font-size: 15px;
    margin-left: 5px;
}
</style>