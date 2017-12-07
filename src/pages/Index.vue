<template>
<div>
    <slider></slider>
    <hotblogs class="hot"></hotblogs>
</div>
</template>

<script>
import Slider from '../components/slider.vue'
import Hotblogs from '../components/front/common/hotblogs.vue'
import Weather from '../components/front/common/weather.vue'
import Newblogs from '../components/front/common/newblogs.vue'
import Tagcloud from '../components/front/common/tagcloud.vue'
import Clock from '../components/front/common/clock.vue'

export default  {

    components: {
        Slider,Hotblogs, Newblogs,Weather,Tagcloud,Clock
    },
}
</script>
<style scoped>
.hot {
    margin-top: 10px;
}
</style>