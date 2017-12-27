import 'babel-runtime/core-js/promise';
import 'babel-polyfill';

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Vuex from 'vuex';
Vue.use(Vuex);

import ElementUI from 'element-ui'
Vue.use(ElementUI);

require('font-awesome-webpack');

import store from './store.js';
import router from './router.js';
import App from './app.vue';

const app = new Vue({
    router: new VueRouter(router),
    store: new Vuex.Store(store),
    render: h => h(App)

}).$mount('#app');