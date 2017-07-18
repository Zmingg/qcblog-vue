import Vue from 'vue/dist/vue.js';
import VueResource from 'vue-resource';
import 'babel-runtime/core-js/promise';
import 'babel-polyfill';
import App from './app.vue'
Vue.use(VueResource);
import store from './store';
import router from './router';

const app = new Vue({
  router,
  store,
  components:{'app':App}

}).$mount('#app');