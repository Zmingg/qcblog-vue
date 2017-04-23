<template>
<div id="slider">
<transition-group name="list" id="list" style="" tag="ul">
<li v-for="data in datas" :style="{width:slider.wid+'px'}"  :key="data">
	<img :src="data.src" :alt="data.title" />
	<div class="title">{{ data.title }}</div>
</li>
</transition-group>
<ol id="slider-control">
	<li v-for="n in slider.count" :class="{active: slider.index==n} ">
		<a href="#" v-on:click="show(n)">{{ n }}</a>
	</li>
</ol>

</div>
</template>


<script>
export default {
	data:function(){
		return {
			slider:{
				interval:3000,
				transition:'0.7s',
				wid:'',
				count:'',
				list:{},
				nav:[],
				lis:[],
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

		
	},

	mounted:function(){
		var interval = this.slider.interval; // set interval
		var transition = this.slider.transition;  // set transitionDuration

		this.slider.list = document.getElementById('list');
		this.slider.lis= this.slider.list.getElementsByTagName('li');
		this.slider.nav = document.getElementById('slider-control').getElementsByTagName('li');
		this.slider.count = this.slider.lis.length;
		this.slider.wid = document.getElementById('slider').clientWidth;  // 得到位移宽度			
		this.datas.push(this.datas[0]);
		this.datas.unshift(this.datas[this.datas.length-2]);
		// this.play();

			
		setInterval((function () {
			this.shuffle();
		}).bind(this),5000);	

	},

	methods:{
		shuffle: function () {
			console.log(this.datas)
			var ss = this.datas[0]
			
			this.datas.push(ss);
this.datas.shift();
			
		},

		show:function(id){
			console.log(id);
			
			
			// 计算偏移x
			var x=-(id-1)*this.slider.wid;
			this.slider.list.style.transitionDuration=this.slider.transition;	
			this.slider.list.style.transform="translate("+x+"px)";
			
			// var that = this;
			// this.slider.list.addEventListener("transitionend", function(){
			// 	if (that.slider.index>count) {
			// 		this.slider.list.style.transitionDuration='0s';	
			// 		this.slider.list.style.transform="translate("+0+"px)";
			// 		that.slider.index = 1;
							
			// 		setTimeout(function(){
			// 			list.style.transitionDuration=transition;	
			// 		},100);
			// 	};												
			// });		
			this.slider.index=id;
		},

		play:function(){
			var count = this.slider.count;
			var list = this.slider.list;
			var transition = this.slider.transition;
			
			


			// if (this.slider.index>count) {
			// 	list.style.transitionDuration='0s';	
			// 	list.style.transform="translate("+0+"px)";
			// 	this.slider.index = 1;

			// }

			// list.addEventListener("transitionend", function(){
			// 	if (that.slider.index>count) {
			// 		list.style.transitionDuration='0s';	
			// 		list.style.transform="translate("+0+"px)";
			// 		that.slider.index = 1;
							
			// 		setTimeout(function(){
			// 			list.style.transitionDuration=transition;	
			// 		},100);
			// 	};												
			// });		
			setInterval(function () {
				that.slider.index++;
				that.show(that.slider.index);
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition:all 3s;
/*  opacity: 0;
  transform: translate(-870px);*/
}




#slider {
    position: relative;
    /*margin: auto;*/
    width: 100%;
    /*overflow: hidden;*/
}

#list {
    position: relative;
    z-index: 1;
    width: 500%;
    left:-870px;
    list-style-type:none;
    overflow: hidden;
    transition-duration:1s;
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