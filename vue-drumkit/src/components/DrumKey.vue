<template>
	<button :class="`drumKey ${clicked ? 'clicked' : ''}`" @click="play">
		{{ sound.letter }}
	</button>
</template>

<script lang="ts">
export default {
	name: 'drumKey',
	props: ['sound'],
	data() {
		return {
			clicked: false
		}
	},
	methods: {
		async play() {
			this.clicked = true;
			new Audio((await this.sound.audio).default).play();

			setTimeout(() => {
				this.clicked = false;
			}, 200);
		},
		handleKeyDown(e: { key: string; }) {
			if (e.key.toLowerCase() === this.sound.letter.toLowerCase()) {
				this.play();
			}
		}
	},
	mounted() {
		document.addEventListener('keydown', this.handleKeyDown);
	},
	beforeUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}
}
</script>

<style>
button {
	appearance: none;
	background: none;
	outline: none;
	border: none;
	cursor: pointer;

	display: block;
	width: 100px;
	height: 100px;
	font-size: 48px;
	margin: 0 0.5rem;

	color: #FFF;
	font-weight: 700;
	background-color: black;
	border-radius: 1rem;

	transition: 0.4s;
}

button:hover {
	opacity: 0.7;
	transform: scale(0.95);
}

button:active,
button.clicked {
	transform: scale(1.1);
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
}
</style>