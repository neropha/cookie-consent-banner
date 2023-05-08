import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import './main.css'
import App from './App.vue'


export default class NccbComponent {
    FirstName = null;
    LastName = "";x

    // constructor(customSettings) {
    //     this.settings = customSettings;
    // }
    // init() {
    //     document.app = createApp(App)
    //         .use(VueCookies, { expires: '1y' })
    //         .mount('#ncc-banner');
    // }
}
// https://orestbida.com/demo-projects/cookieconsent/

document.app = createApp(App)
    .use(VueCookies, { expires: '1y' })
    .mount('#ncc-banner');
