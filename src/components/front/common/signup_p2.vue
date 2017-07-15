<template>
	<transition name="fade">
		<div style="position:absolute">
			<div class="am-input-group login-input"  style="position:relative">
				<span class="am-input-group-label"><i class="am-icon-at am-icon-fw"></i></span>
				<input type="email" maxlength="20" name="email" class="am-form-field" placeholder="Email" v-model.lazy="user.email" disabled/>
			</div>
			<div class="am-input-group login-input" :class="{'am-form-error':errors.pass}">
				<span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
				<input type="password" maxlength="20" name="password" class="am-form-field" :placeholder="places.pass" v-model.lazy="user.pass"/>
			</div>
			<div class="am-input-group login-input" :class="{'am-form-error':errors.pass}">
				<span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
				<input type="password" maxlength="20" name="repassword" class="am-form-field" placeholder="Password Again" v-model.lazy="user.repass"/>
			</div>
			<div style="text-align:center;">
				<button @click="submit" class="am-btn am-btn-success" type="button">确认注册</button>
			</div>
		</div>
	</transition>
</template>
<script>
export default {
	props: ['user','submit','places','errors'],
}
</script>