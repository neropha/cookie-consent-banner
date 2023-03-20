<script setup>
import CookieTopic from './components/CookieTopic.vue';
import CookieButtons from './components/CookieButtons.vue';
// import settings from './data/settings.js';
</script>

<template>
  <form class="nccb" tabindex="-1">
    <h3 class="nccb__headline">Datenschutzeinstellungen</h3>
    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.</p>
    <div class="nccb__grid">
      <CookieTopic headline="Notwendige Cookies" checked disabled />
      <CookieTopic headline="Funktionale Cookies" />
      <CookieTopic headline="Statistik" />
    </div>
    <div class="nccb__buttons">
      <CookieButtons />
    </div>
  </form>
</template>

<style scoped>
.nccb {
  @apply container max-w-4xl py-5 max-h-max;
}

.nccb__grid {
  @apply flex flex-col mt-5;
}

.nccb__toggler {
  @apply flex justify-between;
}

.nccb__headline {
  @apply text-xl mb-5;
}

.nccb__buttons {
  @apply border-t border-gray-light pt-5 flex justify-between;
}
</style>
