import Vue from 'vue/dist/vue.esm.js';
import VueRs from 'vue-resource';
import Index from './components/front/index.vue';
import VueRouter from 'vue-router'
import Blog from './components/front/blog.vue';
Vue.use(VueRouter)
Vue.use(VueRs);


const router = new VueRouter({
	// mode:'history',
	routes:[
		{ path: '/', component: Index },
		{ path: '/blog', component: Blog }
	]
})

const app = new Vue({
  router
}).$mount('#app')


// new Vue ({
// 	el:"#app",
// 	render:h=>h(Index)
// })






