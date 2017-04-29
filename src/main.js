// import Vue from 'vue/dist/vue.esm.js';
// import VueRs from 'vue-resource';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter)
// Vue.use(VueResource);
import 'babel-runtime/core-js/promise';
import 'babel-polyfill';
import Index from './components/front/Index.vue';
import Blog from './components/front/Blog.vue';
import BlogShow from './components/front/BlogShow.vue';
import App from './app.vue'

const router = new VueRouter({
	// mode:'history',
	routes:[
		{ path: '/', component: Index },
		{ path: '/blog/:cate?', component: Blog },
		{ path: '/blog/search/:tag', component: Blog },
		{ path: '/blog/:id/:title?', component: BlogShow },
	]
});



const app = new Vue({
  router,
  components:{'app':App}

}).$mount('#app');