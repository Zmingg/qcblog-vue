<template>
<div id="slider">
<ul id="list" :style="realStyle">
<li v-for="data in datas" :style="{width:liwidth}">
	<img :src="data.src" :alt="data.title" />
	<div class="title">{{ data.title }}</div>
</li>
</ul>
<ol id="slider-control">
	<li v-for="n in datas.length-1" :class="{active: slider.index==n} ">
		<a href="#" v-on:click="show(n)">{{ n }}</a>
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
				interval:3000,
				transition:0.5,
				index:1,
			},
			datas:[
				{title:'QC BLOG —— For Web Technology Share',src:'assets/img/bing-1.jpg'},
				{title:'Laravel —— 为WEB艺术家创造的PHP框架',src:'assets/img/bing-2.jpg'},
				{title:'xxxxxxxxxxx',src:'assets/img/bing-3.jpg'}
			],
		
		}
	},
	computed:{
		realStyle:function(){
			return {
				width:this.style.width*4+"px",
				transition:this.style.transition+'s',
				transform:"translate("+this.style.transform+"px)",
			}
		},
		liwidth:function(){
			return this.style.width+"px"
		},

	},

	watch:{

		'slider.index':function(index){		
			if (index>3) {
				this.slider.index = 1;			
				var that = this;
				setTimeout(function(){		
					that.style.transition=0;	
					that.style.transform=0;				
				},this.style.transition*1000);
			}
		}
	},

	mounted:function(){
		this.style.width = this.$el.clientWidth
		this.datas.push(this.datas[0])					
		this.play()
		var that = this
		window.addEventListener('resize',function(){
			that.style.width = that.$el.clientWidth
		})


	},

	methods:{
		show:function(id){	
			this.style.transition=this.slider.transition
			this.style.transform=-(id-1)*this.style.width
			this.slider.index=id
		},

		play:function(){
			var that = this;	
			setInterval(function () {
				that.slider.index++
				that.show(that.slider.index)
			},this.slider.interval);	
		}

	},

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

body {
    padding: 20px;
}

#slider {
    position: relative;
    width: 100%;
    overflow: hidden;
}

#list {
    position: relative;
    z-index: 1;
    width: 400%;
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
    padding: 8px;
    color: #fff;
    display: block;
    width: 100%;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

#slider-control {
    z-index: 1;
    position: absolute;
    bottom: 0;
    display: table;
    width: 100%;
    height: 6px;
    font-size: 0;
    line-height: 0;
    text-align: center;
}

#slider-control li{
    display: table-cell;
    background-color: #333;
    width: 1%;
}

#slider-control .active{
    background-color: #0e90d2;
}

#slider-control li a {
    width: 100%;
    height: 6px;
    display: block;
    cursor: pointer;
    text-indent: -9999px;
}
</style>