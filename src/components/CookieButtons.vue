<script setup>
import { ref } from 'vue'

defineProps({
    headline: String,
});

const count = ref(0)
</script>

<script>
export default {
    data() {
        return {
            name: 'Vue.js'
        }
    },
    methods: {
        greet(event) {
            // `this` inside methods points to the current active instance
            alert(`Hello ${this.name}!`)
            // `event` is the native DOM event
            if (event) {
                alert(event.target.tagName)
            }
            return false;
        }
    }
}
</script>

<template>
    <button class="btn--dismiss" type="button">Ablehnen</button>
    <button class="btn--accept" type="submit" @click="greet">Akzeptieren</button>
</template>

<style scoped>
button {
    @apply text-sm uppercase p-4 rounded border leading-none outline-none;
}

.btn--accept {
    @apply bg-pink-dark border-pink-dark text-white font-bold px-10 transition-all;
}

.btn--accept:hover,
.btn--accept:focus,
.btn--accept:active {
    @apply border-pink bg-pink;
}

.btn--accept:active {
    @apply drop-shadow;
}

.btn--dismiss {
    @apply bg-white border border-gray text-gray hover:text-pink hover:border-pink;
}</style>