<template>
	<div style="max-width:400px;margin:0 auto;">
		
		<!-- <Signin></Signin> -->
		<Signup></Signup>
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
			username: '',
			phone: null,
			password: null,
		}
	}
}
</script>