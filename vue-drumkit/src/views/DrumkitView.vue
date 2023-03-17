<template>
  <div class="drumkit">
    <h1 class="drumkit__heading">Vue Drumkit</h1>
    <div class="drum__wrapper">
      <demo-button :keys="keys" />
      <div class="keys">
        <DrumKey v-for="(key, i) in keys" :sound="key" :key="i" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DrumKey from '../components/DrumKey.vue'
import DemoButton from '../components/DemoButton.vue';

export default {
  name: 'App',
  data() {
    return {
      keys: [
        {
          name: "boom",
          audio: import("../assets/sounds/boom.wav"),
          letter: "A"
        },
        {
          name: "clap",
          audio: import("../assets/sounds/clap.wav"),
          letter: "S"
        },
        {
          name: "hihat",
          audio: import("../assets/sounds/hihat.wav"),
          letter: "D"
        },
        {
          name: "kick",
          audio: import("../assets/sounds/kick.wav"),
          letter: "F"
        },
        {
          name: "openhat",
          audio: import("../assets/sounds/openhat.wav"),
          letter: "G"
        },
        {
          name: "ride",
          audio: import("../assets/sounds/ride.wav"),
          letter: "H"
        },
        {
          name: "snare",
          audio: import("../assets/sounds/snare.wav"),
          letter: "J"
        },
        {
          name: "tink",
          audio: import("../assets/sounds/tink.wav"),
          letter: "K"
        },
        {
          name: "tom",
          audio: import("../assets/sounds/tom.wav"),
          letter: "L"
        }
      ]
    }
  },
  components: {
    DrumKey,
    DemoButton
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Serif+Lao:wght@500&display=swap');

.drum__wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.drumkit__heading {
  font-family: 'Bebas Neue', cursive;
  font-size: 70px;
  text-align: center;
}

.keys {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>