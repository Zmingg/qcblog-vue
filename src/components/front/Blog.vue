<template>
<div class="am-g am-g-fixed"> 
  
    <div class="am-g-fixed">

        <blog-list></blog-list>

        <div class="am-u-lg-3 am-show-md-down my-blank"></div> <!-- 侧栏调低 -->

        <div class="am-u-lg-3 ">

            <newblogs></newblogs>
            <tagcloud></tagcloud>

        </div>

    </div>

</div>
</template>

<script>
import BlogList from './common/blog.list.vue'
import Weather from './common/weather.vue'
import Newblogs from './common/newblogs.vue'
import Tagcloud from './common/tagcloud.vue'


export default  {

    components: {
        BlogList, Newblogs,Weather,Tagcloud
    },
}
</script>