import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import { applyToken,refreshToken,checkUser,deleteToken,registerCode,regCdCheck,signUp } from './api/api';
import router from './router';
Vue.use(Vuex);
import validator from 'validator';

export default  new Vuex.Store({
	state: {
		isLogin: false,
		user: {email:''},
	},
	mutations: {
	    signin(state){
	    	localStorage.isLogin = 'true';
	    	state.isLogin = true;
	    	state.user = JSON.parse(localStorage.user);
	    },
	    signout(state){
	    	localStorage.token = '';
	    	localStorage.isLogin = 'false';
	    	state.isLogin = false;
	    	state.user = {};
	    },

	},
	actions: {
		async login({ commit,dispatch },user){
			let res = {};
			if (typeof localStorage.token == 'undefined'|| localStorage.token=='') {
				res = await applyToken(user)
			} else {
				res = await refreshToken();
			}
			if (res.ok) {
				try {
					res = await checkUser();
					commit('signin');
		    		router.push('/');
				} catch(e){
					res = e;
				}
			}
			return res;
		},

		async checkSignin({ commit }){
			if (localStorage.isLogin=='true') {
				if(await checkUser){
					commit('signin');
				} else {
					commit('signout');
				}
			}
		},

		logout({ commit }){
			commit('signout');
		},

		registerCode({},email){
			if (validator.isEmail(email)){
				return registerCode(email);
			} else {
				return {message:'Not a email'};
			}	
		},
		regCdCheck({},register){

			if (!validator.isEmail(register.email)) {
				return { type:'email',message:'Not a email' };
			} else if( validator.isEmpty(register.code) ){
				return { type:'code',message:'Code is empty' };
			} else {
				return regCdCheck(register.email,register.code);
			}
		},

		async signUp({dispatch},register){
			let res = await signUp(register);
			if (res.ok) {
				await dispatch('login',register)
				router.push('/');
			}
		}
	}
	
})