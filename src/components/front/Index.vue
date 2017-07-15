<template>
<div class="am-g am-g-fixed"> 
  
    <div class="am-g-fixed">

        <div class="am-u-lg-9 ">

                <slider></slider>
                <hotblogs></hotblogs>

        </div>

        <div class="am-u-lg-3 am-show-md-down my-blank"></div> <!-- 侧栏调低 -->

        <div class="am-u-lg-3 ">
        
            <Clock></Clock>
            <weather></weather>
            <newblogs class="am-show-md-down"></newblogs>
            <tagcloud></tagcloud>

        </div>

    </div>
</div>
</template>

<script>
import Slider from './common/slider.vue'
import Hotblogs from './common/hotblogs.vue'
import Weather from './common/weather.vue'
import Newblogs from './common/newblogs.vue'
import Tagcloud from './common/tagcloud.vue'
import Clock from './common/clock.vue'

export default  {

    components: {
        Slider,Hotblogs, Newblogs,Weather,Tagcloud,Clock
    },
}
</script>