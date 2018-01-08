<template>
<div id="goTop" @click="goTop()" v-show="show">
    <img src="assets/img/top.png">
</div>
</template>
<script>
export default{
	data:function(){
		return{
			show:false,
			transtion:100,
		}
	},

	mounted:function(){
		
		addEventListener('scroll',()=>{
			this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			
			if (this.scrollTop>200) {
				this.show = true;
			}else{
				if(this.scrollTop==0)  clearInterval(this.go);
				this.show = false;
			}
		});
	},

	methods:{
		goTop(){
			let x = this.scrollTop/this.transtion*2;
			this.go = setInterval(()=>{
				window.scrollBy(0,-x);
			},2);
		}
	}


}
</script>
<style scoped>
#goTop {
	width: 10%;
	z-index: 9999;
	position: fixed;
	right: 5%;
	bottom: 5%;
}
</style>