import 'babel-runtime/core-js/promise';
import 'babel-polyfill';

import store from './store.js';
import router from './router.js';
import App from './app.vue';

require('font-awesome-webpack');

import './assets/css/app.css';

const app = new Vue({
    router: new VueRouter(router),
    store: new Vuex.Store(store),
    render: h => h(App)

}).$mount('#app');