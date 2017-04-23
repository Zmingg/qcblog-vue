import Vue from 'vue/dist/vue.esm.js';
import VueRs from 'vue-resource';
import Index from './components/front/Index.vue';
import VueRouter from 'vue-router'
import Blog from './components/front/Blog.vue';
import BlogShow from './components/front/BlogShow.vue';
Vue.use(VueRouter)
Vue.use(VueRs);


const router = new VueRouter({
	// mode:'history',
	routes:[
		{ path: '/', component: Index },
		{ path: '/blog/:cate?', component: Blog },
		{ path: '/blog/:id/:title?', component: BlogShow },
	]
})

const app = new Vue({
  router
}).$mount('#app')







