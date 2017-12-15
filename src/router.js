import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from './pages/Index.vue';
import Blog from './pages/blog/blog.vue';
import BlogList from './pages/blog/list.vue';
import BlogDetail from './pages/blog/detail.vue';
import Passport from './components/front/Passport.vue';

export default new VueRouter({
    mode:'history',
    routes:[
        { path: '/', component: Index },
        { path: '/blog', component: Blog, children: [
            { path: '', component: BlogList },
            { path: ':id', component: BlogDetail }
        ]}
    ]
});