<template>
    <div class="pagination">
        <MyButton @click="prevPage" :disabled="currentPage < 2">
            &larr;
        </MyButton>
        <span class="page-numbers">{{ currentPage }} / {{ pageCount }}</span>
        <MyButton @click="nextPage" :disabled="currentPage >= pageCount">
            &rarr;
        </MyButton>
    </div>
</template>

<script lang="ts">
import MyButton from './Inputs/CustomButton.vue';

export default {
    components: {
        MyButton
    },
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        pageCount: {
            type: Number,
            required: true,
        }
    },
    methods: {
        nextPage() {
            this.$emit('nextPage');
        },
        prevPage() {
            this.$emit('prevPage');
        }
    }
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 25px 0;
}

.page-numbers {
    color: black;
    font-size: 20px;
}
</style>