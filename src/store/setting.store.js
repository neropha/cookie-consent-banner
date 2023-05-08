import { reactive } from 'vue'
import settings from '@/data/settings.js';

export const settingStore = reactive({
    categories: settings.categories,
    body: settings.body,
    buttons: settings.buttons,
    cookieName: settings.cookieName,
    values: {},
    getCategories: () => {
        return settingStore.categories;
    },
    getCookieName: () => {
        return settingStore.cookieName;
    },
    getBody: () => {
        return settingStore.body;
    },
    getButtons: () => {
        return settingStore.buttons;
    }
});