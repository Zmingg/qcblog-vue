// import Vue from 'vue';
// import VueResource from 'vue-resource';
// Vue.use(VueResource);
import 'babel-runtime/core-js/promise';
import 'babel-polyfill';

import store from './store.js';
import router from './router.js';
import App from './app.vue'


const app = new Vue({
  router,
  store,
  components:{'app':App}

}).$mount('#app');