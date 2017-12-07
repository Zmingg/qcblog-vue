import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import 'babel-runtime/core-js/promise';
import 'babel-polyfill';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import store from './store.js';
import router from './router.js';
import App from './app.vue'


const app = new Vue({
  router: router,
  store: store,
  render: h => h(App)

}).$mount('#app');