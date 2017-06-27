<template>
	<transition name="fade">
	    <div style="position:absolute">
	  		<div class="am-input-group login-input" :class="{'am-form-error':errors.email}" style="position:relative" >
				<span class="am-input-group-label"><i class="am-icon-at am-icon-fw"></i></span>
				<input type="email" maxlength="20" name="email" class="am-form-field" :placeholder="places.email" v-model.lazy="user.email"/>
			</div>
			<div class="am-input-group login-input" :class="{'am-form-error':errors.code}">
				<input id="code" type="text" class="am-form-field"  v-model="user.code" name="code" :placeholder="places.code">
				<span class="am-input-group-btn" style="width:30%">
        			<button v-show="!sending" @click="sendCode" class="am-btn am-btn-default" type="button">发送验证码至邮箱</button>
        			<a v-show="sending" class="am-btn am-btn-default am-disabled" >等待 {{ timeCount }} 秒重新发送</a>
        		</span>
            </div>
			<div style="text-align:center;">
				<a v-on:click="next" class="am-btn am-btn-success" type="button">下一步</a>
			</div>
		</div>
	</transition>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	props: ['user','errors','places','next'],
    data: function(){
	    	return {
	    		timeCount: 60,
	    		sending: false,
	    		errorClass: 'am-form-error',

    		}
    },
    methods:{
		...mapActions([
			'registerCode'
		]),
		sendCode: async function(){
			let res = await this.registerCode(this.user.email);
			if (res.ok) {
				this.sending = true;
				this.timing()
			} else {
				this.user.email = '';
				this.places.email = res.message;
				this.errors.email = true
			}

		},
		timing: function(){
			var timeid = setInterval(()=>{	
				if (this.timeCount==0) {
					clearInterval(timeid);
					this.sending = false;
					this.timeCount=60;
				} else {
					this.timeCount-=1;
				}
			},1000)
		}
	}
}
</script>