<script>
import { cookieStore } from "@/store/cookie.store.js";

export default {
  props: {
    category: {},
    cat: String,
  },
  data() {
    return {
      values: cookieStore.getValues(),
    };
  },
  mounted() {
    cookieStore.setValue({ [this.cat]: this.category.checked });
  },
  methods: {
    collect(event) {
      if (event) {
        cookieStore.setValue({ [this.cat]: event.target.checked });
      }
    },
  },
};
</script>

<template>
  <section class="topic">
    <label class="topic__toggle" :for="cat">
      <span class="topic__label">{{ category.headline }}</span>
      <input :id="cat" type="checkbox" :checked="category.checked" :disabled="category.disabled" @click="collect" />
    </label>
    <p v-if="category.description" class="topic__desc">{{ category.description }}</p>
  </section>
</template>

<style>
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
