<template>
    <input class="input" :value="value" @input="updateInput" type="text" :placeholder="`${placeholder}`">
</template>

<script lang="ts">
export default {
    props: {
        value: {
            type: String || Number,
        },
        placeholder: {
            type: String,
            required: true,
        }
    },
    methods: {
        updateInput(event: any) {
            this.$emit('update:value', event.target.value);
        }
    }
};
</script>

<style scoped>
.input {
    padding: 5px;
    border-radius: 10px;
    font-size: 20px;
    outline: rgb(0, 0, 0);
}
</style>