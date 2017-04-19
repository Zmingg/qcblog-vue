<template>
<div class="am-slider am-slider-c1" data-am-flexslider="{directionNav:false,playAfterPaused:1000,slideshowSpeed:4000}
" data-am-widget="slider" >
    <ul class="am-slides">

        <li v-for="image in images">
            <img :src="image.src" />
            <div class="am-slider-desc">{{image.title}}</div>
        </li>
       
    </ul>
</div>
</template>

<script>
export default {
	data:function(){
		return {
			images:[
				{ src:'assets/img/bing-1.jpg',title:'Laravelssssss —— 为WEB艺术家创造的PHP框架'},
				{ src:'assets/img/bing-2.jpg',title:'Amaze UI ~ 中国首个开源 HTML5 跨屏前端框架'}
			]
		}
	}


}
</script>