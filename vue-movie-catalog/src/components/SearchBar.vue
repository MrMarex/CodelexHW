<template>
    <form class="searchbar__form" @submit.prevent="searchFn">
        <CustomInput v-model:value="search" placeholder="Harry Potter..." />
        <CustomButton>Search</CustomButton>
    </form>
</template>

<script lang="ts">
import CustomButton from './Inputs/CustomButton.vue';
import CustomInput from './Inputs/CustomInput.vue';

export default {
    components: {
        CustomInput,
        CustomButton,
    },
    data() {
        return {
            search: '',
        };
    },
    methods: {
        searchFn() {
            this.$router.push({ path: '/movies', query: { param: this.search, page: 1 } });
            this.$emit('search', this.search);
            this.search = '';
        }
    }
};
</script>

<style scoped>
.searchbar__form {
    display: flex;
    gap: 10px;
}

.search-bar__text {
    font-size: 20px;
}
</style>