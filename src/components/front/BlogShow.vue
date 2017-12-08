<template>
<div class="am-g am-g-fixed"> 
  
    <div class="am-g-fixed">

        <blog-detail></blog-detail>

        <div class="am-u-lg-3 am-show-md-down my-blank"></div> <!-- 侧栏调低 -->

        <div class="am-u-lg-3 ">

            <newblogs></newblogs>
            <tagcloud></tagcloud>

        </div>

    </div>

    <gotop></gotop>

</div>
</template>

<script>
import BlogDetail from './common/blog.detail.vue'
import Weather from './common/weather.vue'
import Newblogs from '../newblogs.vue'
import Tagcloud from './common/tagcloud.vue'
import Gotop from './common/gotop.vue'

export default  {

    components: {
        BlogDetail, Newblogs,Weather,Tagcloud,Gotop
    },
}
</script>