<template>
	<div style="max-width:400px;margin:0 auto;position:relative;height:400px;">	
		<div class="am-input-group login-input" :class="{'am-form-error':errors}">
	        <span class="am-input-group-label"><i class="am-icon-at am-icon-fw"></i></span>
	        <input type="email" maxlength="20" name="email" class="am-form-field" :placeholder="holder.email" v-model.lazy="user.email">
		</div>
		<div class="am-input-group login-input">
			<span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
			<input type="password" maxlength="20" name="password" class="am-form-field" placeholder="Password" v-model.lazy="user.pass"/>
		</div>
		<div style="text-align:center">
			<button @click="signin" class="am-btn am-btn-success" type="button">登 录</button>
			<slot name="goSignUp"></slot>
		</div>
		<div class="message">
			<ul>
				<p>您可使用zmhjy.xyz网站账号登录，也可在此app端直接注册</p>
				<p>您可使用zmhjy.xyz网站账号登录，也可在此app端直接注册</p>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
	data: function(){
		return {
			user: {
				email: '',
				pass: '',
			},
			holder:{
				email:'输入注册邮箱',
			},
			errors: false,
		}
	},

	computed: {
		...mapState({
			count: state => state.count,
		}),
		...mapGetters({
			dones: 'doneTodos'
		}),
		
		done: function(){
			return this.$store.getters.doneTodos
		}
	},
	
	methods:{
		...mapActions([
			'login'
		]),
		go: function(){
			this.currentView  = (this.currentView==p1?p2:p1);
		},
		newCaptcha:function(){
			this.img = 'http://laravel.cc/captcha/'+Math.floor(Math.random()*1000)
		},
		signin:async function(){
			let res = await this.login(this.user)
			if ( !res.ok ) {
				this.errors = true;
				this.user.email = '';
				this.holder.email = res.message;
			}
		}

	},
}
</script>
<style scope>
a {
	cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
    transition: 1s;
}
.fade-enter {
    transform: translateX(150%);
    opacity: 0;
}
.fade-leave-to {
	transform: translateX(-150%);
	opacity: 0;
}

.message {
	text-align: center;
	margin-top: 10px;
	position: relative;
	overflow: hidden;
}
.message ul {
	width:  1000px;
	padding: 0;
}
.message ul p {
	width:  500px;
	white-space: nowrap;
	float:left;
	position: relative;
	animation:mymove 10s linear infinite;
}
@keyframes mymove
{
from {left:0;}
to {left:-50%;}
}



</style>