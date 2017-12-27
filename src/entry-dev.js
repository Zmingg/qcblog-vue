import 'babel-runtime/core-js/promise';
import 'babel-polyfill';

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Vuex from 'vuex';
Vue.use(Vuex);

import ElementUi from 'element-ui'
Vue.use(ElementUi);
import 'element-ui/lib/theme-chalk/index.css'

require('font-awesome-webpack');

import './assets/css/app.css';

import Store from './store.js';
import Router from './router.js';
import App from './app.vue';

new Vue({
    router: new VueRouter(Router),
    store: new Vuex.Store(Store),
    render: h => h(App)

}).$mount('#app');