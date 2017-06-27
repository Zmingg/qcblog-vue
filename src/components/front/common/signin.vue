<template>
	<div style="max-width:400px;margin:0 auto;position:relative;height:400px;">	
		<div style="position:absolute">
			<div class="am-input-group login-input">
		        <span class="am-input-group-label"><i class="am-icon-at am-icon-fw"></i></span>
		        <input type="email" maxlength="20" name="email" class="am-form-field" placeholder="Username" v-model.lazy="user.email">
			</div>
			<div class="am-input-group login-input">
				<span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
				<input type="password" maxlength="20" name="password" class="am-form-field" placeholder="Password" v-model.lazy="user.pass"/>
			</div>
			<div style="text-align:right">
				<a @click="signin">Login</a>
			</div>
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
		}
	},

	mounted:function(){
		
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
			'add','increment','newCaptcha','login'
		]),
		go: function(){
			this.currentView  = (this.currentView==p1?p2:p1);
		},
		newCaptcha:function(){
			this.img = 'http://laravel.cc/captcha/'+Math.floor(Math.random()*1000)
		},
		signin:function(){
			this.login(this.user)
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