<template>
<div id="slider">
<ul id="list" :style="realStyle">
<li v-for="data in datas" :style="{width:liwidth}">
	<img :src="data.src" :alt="data.title" />
	<div class="title">{{ data.title }}</div>
</li>
</ul>
<ol id="control">
	<li v-for="n in datas.length-2" :class="{active: slider.index==n} ">
		<a v-on:click="show(n)">{{ n }}</a>
	</li>
</ol>

</div>
</template>
<script>
export default {
	data:function(){
		return {
			style:{
				width:1,
				transition:0,
				transform:0,
				left:0,
			},
			slider:{
				interval:4000,     // set interval
				transition:650,	//set transtion
				index:1,
			},
			datas:[
				{title:'QC BLOG —— For Web Technology Share',src:'assets/img/bing-1.jpg'},
				{title:'Laravel —— 为WEB艺术家创造的PHP框架',src:'assets/img/bing-2.jpg'},
				{title:'xxxxxxxxxxx',src:'assets/img/bing-3.jpg'}
			]
		
		}
	},
	computed:{
		realStyle:function(){
			return {
				width:this.style.width*(this.datas.length+2)+"px",
				transition:this.style.transition+"ms",
				transform:"translate("+this.style.transform+"px)",
				left:this.style.left+'px'
			};
		},
		liwidth:function(){
			return this.style.width+"px";
		}

	},

	watch:{
		'slider.index':function({sld=this.slider,css=this.style}) {
			if (sld.index>=this.datas.length-1) {
				sld.index = 1;	
				setTimeout( () => {	
					css.transition = 0;
					css.transform = -css.width;
				},css.transition);
			}else if(sld.index<1){
				sld.index = this.datas.length-2;
				setTimeout( () => {	
					css.transition = 0;
					css.transform = -css.width*sld.index;		
				},css.transition);
			}
		}
	},

	mounted:function(dat=this.datas,css=this.style){
		addEventListener('resize', () => css.width=this.$el.clientWidth);
		css.width = this.$el.clientWidth;
		css.transform = -css.width;
		dat.unshift(dat[dat.length-1]);	
		dat.push(dat[1]);		
		this.play();
		this.touch();
	},

	methods:{
		show(id){	
			this.style.transition=this.slider.transition;
			this.style.transform=-id*this.style.width;
			this.slider.index=id;
		},

		play(){
			this.p = setInterval( (x=this.slider.index) => {
				x++;
				this.show(x);
			},this.slider.interval);
		},

		touch(){
			this.x = 0,

			this.$el.addEventListener('touchstart', evt=>{
				clearInterval(this.p);
				let tc = evt.changedTouches[0];
				this.style.transition=0;		
				this.x=tc.pageX;
				this.y=tc.pageY;
			});

			this.$el.addEventListener('touchmove', evt=>{
				let tc = evt.changedTouches[0];
				let transform = -this.style.width*(this.slider.index);
				let mv  = tc.pageX-this.x;
				this.style.transform =transform+mv;
			});

			this.$el.addEventListener('touchend', evt=>{
				let tc = evt.changedTouches[0];
				var mv = tc.pageX-this.x;
				if (Math.abs(mv) >50){
					this.show(this.slider.index-mv/Math.abs(mv));
				}
				this.play();
			});

			this.$el.addEventListener('touchcancel', evt=> this.x=0);
		}
	}

}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    box-sizing:border-box;
    -webkit-box-sizing: border-box;
}

#slider {
    position: relative;
    width: 100%;
    overflow: hidden;
}

#list {
    position: relative;
    z-index: 1;
    list-style-type:none;
}

#list li {
    position: relative;
    display: block;
    float: left;
}

#list img {
    display: block;
    width:100%;
}

#list li .title {
    background-color: #000;
    opacity:0.6;
    position: absolute;
    bottom: 6px;
    padding: 6px;
    color: #fff;
    display: block;
    width: 100%;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

#control {
    z-index: 1;
    position: absolute;
    bottom: 0;
    display: table;
    width: 100%;
    height:6px;
    font-size: 0;
    line-height: 0;
    text-align: center;
}

#control li{
    display: table-cell;
    background-color: #333;
    width: 1%;
}

#control .active{
    background-color: #0e90d2;
}

#control li a {
    width: 100%;
    height: 6px;
    display: block;
    cursor: pointer;
    text-indent: -9999px;
}
</style>