<script>
import CookieTopic from "@/components/CookieTopic.vue";
import VueCookies from "vue-cookies";
import { settingStore } from "@/store/setting.store.js";
import { cookieStore } from "@/store/cookie.store.js";

export default {
  components: {
    CookieTopic,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      categories: settingStore.getCategories(),
      body: settingStore.getBody(),
      buttons: settingStore.getButtons(),
      cookieName: settingStore.getCookieName(),
      configOpen: false,
      showBanner: !cookieStore.hasCookie()
    };
  },
  mounted: {

  },
  methods: {
    acceptAll(event) {
      // `event` is the native DOM event
      if (event) {
        // cookieStore.setAll();
        this.showBanner = false;
        VueCookies.set(this.cookieName, cookieStore.getValues());
      }
    },
    acceptSelected(event) {
      if (event) {
        VueCookies.set(this.cookieName, cookieStore.getValues(), "1w");
        this.showBanner = false;
      }
    },
    configureCategories(event) {
      if (event) {
        this.configOpen = !this.configOpen;
      }
    },
  },
};
</script>

<template>
  <Transition name="fade">
    <div class="ncc" v-if="showBanner">
      <form class="ncc__form" tabindex="-1">
        <h3 class="ncc__headline">{{ body.headline }}</h3>
        <p>{{ body.intro }}</p>
        <div class="ncc__grid" v-show="configOpen">
          <CookieTopic v-for="(category, cat) in categories" :category="category" :cat="cat" />
        </div>
        <div class="ncc__buttons">
          <button class="ncc__btn--config" v-if="!configOpen" type="button" @click.prevent="configureCategories">{{ buttons.btnConfigLabel }}</button>
          <button class="ncc__btn--save" v-if="configOpen" type="button" @click.prevent="acceptSelected">{{ buttons.btnSaveLabel }}</button>
          <button class="ncc__btn--accept" type="submit" @click.prevent="acceptAll">{{ buttons.btnAcceptLabel }}</button>
        </div>
      </form>
    </div>
  </Transition>
</template>

<style scoped>
.ncc {
  @apply w-full fixed bottom-0 bg-white max-h-screen overflow-y-auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.ncc__form {
  @apply container max-w-4xl pt-5 max-h-max;
}

.ncc__grid {
  @apply flex flex-col mt-5 border-b border-gray-light;
}

.ncc__toggler {
  @apply flex justify-between;
}

.ncc__headline {
  @apply text-xl mb-5;
}

.ncc__buttons {
  @apply pt-5 flex flex-col-reverse sm:flex-row justify-between gap-5 sticky bottom-0 left-0 bg-white py-5;
}

button {
  @apply text-sm uppercase p-4 rounded border leading-none outline-none;
}

.ncc__btn--accept {
  @apply bg-pink-dark border-pink-dark text-white font-bold px-10 transition-all;
}
.ncc__btn--accept:hover,
.ncc__btn--accept:focus,
.ncc__btn--accept:active {
  @apply border-pink bg-pink;
}

.ncc__btn--accept:active {
  @apply drop-shadow;
}

.ncc__btn--config {
  @apply bg-white border border-gray text-gray hover:text-pink hover:border-pink;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
