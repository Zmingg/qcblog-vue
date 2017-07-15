<template>
<div class="am-hide-md-down">
	
	<div class="clock">


	<canvas>您的浏览器不支持Canvas</canvas>


	</div> 
</div>
</template>
<script>
import { Clock } from 'Lib/canvas.js';
export default{
	mounted:function(){	
		let canvas = document.querySelector('canvas');
		new Clock(canvas);
	},
}
</script>
<style scoped>
	canvas {
		width: 100%;
	}
	.clock {
		width: 85%;
		margin: 0 auto 10px auto;
	}
</style>