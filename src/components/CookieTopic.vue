<script setup>
import { ref } from 'vue'

defineProps({
  headline: String,
  checked: Boolean,
  disabled: Boolean
})

const count = ref(0)
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <!-- <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
      </div> -->

  <section class="topic">
    <label class="topic__toggle" for="nccb__cb0">
      <span class="topic__label">{{ headline }}</span>
      <input id="nccb__cb0" type="checkbox" :checked=checked :disabled=disabled>
    </label>
    <p class="topic__desc">Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.</p>
  </section>
</template>

<style scoped>
.topic {
  @apply flex flex-col gap-2 border-t border-gray-light py-3;
}
.topic__toggle {
  @apply flex justify-between;
}
.topic__label {
  @apply text-base;
}
.topic__desc {
  @apply text-sm;
}
</style>
