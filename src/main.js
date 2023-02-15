import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// bootstrap
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

//STORE FROM store
window.store = store;
//Router global
window.router = router;

// set default settings
import appSetting from './app-setting';

window.$appSetting = appSetting;
window.$appSetting.init();

//vue-meta
import { createHead } from '@vueuse/head';
const head = createHead();


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

app
.use(store).use(router).use(head)
.component('fa', FontAwesomeIcon)
.mount('#app');

