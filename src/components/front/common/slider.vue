<template>
<div id="slider">
<ul id="list" :style="realStyle">
<li v-for="data in datas" :style="{width:liwidth}">
	<img :src="data.src" :alt="data.title" />
	<div class="title">{{ data.title }}</div>
</li>
</ul>
<ol id="control">
	<li v-for="n in datas.length-1" :class="{active: slider.index==n} ">
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
				width:0,
				transition:0,
				transform:0,
			},
			slider:{
				interval:4000,     // set interval
				transition:0.5,	//set transtion
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
				width:this.style.width*(this.datas.length+1)+"px",
				transition:this.style.transition+'s',
				transform:"translate("+this.style.transform+"px)"
			};
		},
		liwidth:function(){
			return this.style.width+"px";
		}

	},

	watch:{
		'slider.index':function() {
			if (this.slider.index>=this.datas.length) {
				this.slider.index = 1;	
				setTimeout( () => {	
					this.style.transition=0;
					this.style.transform=0;		
				},this.style.transition*1000);
			}
		}
	},

	mounted:function(){
		this.style.width = this.$el.clientWidth;
		this.datas.push(this.datas[0]);			
		this.play();
		addEventListener('resize', () => this.style.width = this.$el.clientWidth);
	},

	methods:{
		show(id){	
			this.style.transition=this.slider.transition;
			this.style.transform=-(id-1)*this.style.width;
			this.slider.index=id;
		},

		play(){
			setInterval( (x=this.slider.index) => {
				x++;
				this.show(x);
			},this.slider.interval);
		}

	}

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
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
    overflow: hidden;
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