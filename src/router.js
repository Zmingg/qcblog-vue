// import Vue from 'vue';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
import Index from './components/front/Index.vue';
import Blog from './components/front/Blog.vue';
import BlogShow from './components/front/BlogShow.vue';
import Passport from './components/front/Passport.vue';



export default new VueRouter({
	// mode:'history',
	routes:[
		{ path: '/', component: Index },
		{ path: '/blog/:cate?', component: Blog },
		{ path: '/blog/search/:tag', component: Blog },
		{ path: '/blog/:id/:title?', component: BlogShow },
		{ path: '/passport',component:Passport},
	]
});
