<template>
<div>
	<div class="clock">
		<canvas>您的浏览器不支持Canvas</canvas>
	</div> 
</div>
</template>
<script>
import { Clock } from 'Lib/clock/clock';
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
		width: 100%;
		margin-top: 5px;
	}
</style>