<template>
    <button @click="simulateDemo" :disabled="isDemoPlaying" class="demo-key">Demo</button>
</template>
  
<script lang="ts">
import { ref, type PropType } from 'vue';

type KeyType = {
    audio: Promise<{ default: string }>,
    name: string,
    letter: string,
}

export default {
    props: {
        keys: {
            type: Array as PropType<KeyType[]>,
            required: true
        }
    },
    setup(props) {
        const isDemoPlaying = ref(false);

        const simulateDemo = async () => {
            if (isDemoPlaying.value) return;

            isDemoPlaying.value = true;

            const keysToSimulate = [0, 0, 1, 0, 0, 0, 1, 0];
            const delay = 300;

            for (let i = 0; i < keysToSimulate.length; i++) {
                const keyIndex = keysToSimulate[i];
                const audio = await props.keys[keyIndex].audio;
                new Audio(audio.default).play();
                await new Promise(resolve => setTimeout(resolve, delay));
            }

            isDemoPlaying.value = false;
        }

        return {
            isDemoPlaying,
            simulateDemo
        }
    }
}
</script>

<style scoped>
.demo-key {
    align-self: center;
    width: 300px;
}
</style>