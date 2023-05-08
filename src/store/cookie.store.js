import { reactive } from 'vue';
import VueCookies from "vue-cookies";


export const cookieStore = reactive({
    values: {},
    cookieName: "ncc",
    hasCookie: () => {
        const obj = VueCookies.get(cookieStore.cookieName);
        if ( typeof obj === 'object' && obj !== null)
        return true;
    },
    getCookieName: () => {
        return cookieStore.cookieName;
    },
    getValue: (key) => {
        return cookieStore.values[key];
    },
    getValues: () => {
        return cookieStore.values;
    },
    setAll: () => {
        for (let [key, value] in Object.entries(cookieStore.values)) {
            // console.log(key, value);
        };
    },
    setValue: (newValue) => {
        let values = { ...cookieStore.values, ...newValue };
        cookieStore.values = values;
        return cookieStore.values
    },
});