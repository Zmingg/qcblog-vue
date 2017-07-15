<template>
	<div style="max-width:400px;margin:0 auto;">
		<componet :is="currentView" >
			<button slot="goSignUp" @click="goSignUp" class="am-btn am-btn-warning" type="button">注册新用户</button>
			<button slot="goSignIn" @click="goSignIn" class="am-btn am-btn-success" type="button">返回登录</button>
		</componet>
	</div>
	
</template>
<script>
import Signup from './common/signup.vue'
import Signin from './common/signin.vue'
export default {
	components: {
        Signin, Signup
    },

	data: function(){
		return {
			currentView: Signin
		}
	},

	methods: {
		goSignUp:function(){
			this.currentView = Signup;
		},
		goSignIn:function(){
			this.currentView = Signin;
		}
	}
}
</script>