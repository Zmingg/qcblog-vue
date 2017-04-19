<template>
<div class="am-g am-g-fixed"> 
  
    <div class="am-g-fixed">

        <div class="am-u-lg-9 ">

                <slider></slider>
                <hot-blogs></hot-blogs>

        </div>

        <div class="am-u-lg-3 am-show-md-down my-blank"></div> <!-- 侧栏调低 -->

        <div class="am-u-lg-3 ">

            <weather></weather>
            <new-blogs></new-blogs>
            <tagcloud></tagcloud>

        </div>

    </div>

</div>
</template>

<script>
import Slider from './common/slider.vue'
import HotBlogs from './common/hots.vue'
import Weather from './common/weather.vue'
import NewBlogs from './common/news.vue'
import Tagcloud from './common/tagcloud.vue'


export default  {

    components: {
        Slider,HotBlogs, NewBlogs,Weather,Tagcloud
    },
}
</script>