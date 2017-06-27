<template>
	<div style="max-width:400px;margin:0 auto;position:relative;height:400px;">	
		<component 
			:is="currentView" 
			:user="register" 
			:next="go" 
			:errors="errors" 
			:places="messages"
			:submit="submit">
		</component>
		
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import p1 from './signup_p1.vue'
import p2 from './signup_p2.vue'
export default {
	data: function(){
		return {
			register: {
				email: '',
				code: '',
				pass: '',
				repass:''
			},
			errors: {
	    			email: false,
				code: false,
				pass: false,
	    		},
	    		messages: {
	    			email: '输入邮箱账户',
	    			code: '填写收到的验证码',
	    			pass: 'Password',
	    		},
			currentView: p1,
		}
	},

	watch: {
		'register.email':function(){
			if(this.register.email!=''){
				this.errors.email = false;
			}
		},
		'register.code':function(){
			if(this.register.code!=''){
				this.errors.code = false;
			}
		}
	},

	computed: {

	},
	
	methods:{
		...mapActions([
			'regCdCheck','signUp'
		]),
		go: async function(){
			let res = await this.regCdCheck(this.register);
			if (res.ok) {
				this.currentView  = p2;
			} else {
				let type = res.type?res.type:'code';
				this.errors[type] = true;
				this.register[type] = '';
				this.messages[type] = res.message;
			}
		},
		submit: function(){
			if (this.register.repass!=this.register.pass) {
				this.errors.pass = true;
				this.register.pass = '';
				this.register.repass = '';
				this.messages.pass = 'Pass and RePass is not the same';
			} else {
				let res = this.signUp(this.register)
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

</style>