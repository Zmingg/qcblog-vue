<template>
<div class="am-g am-g-fixed"> 
  
    <div class="am-g-fixed">

        <blog-list></blog-list>

        <div class="am-u-lg-3 am-show-md-down my-blank"></div> <!-- 侧栏调低 -->

        <div class="am-u-lg-3 ">

            <weather>今日天气</weather>
            <new-blogs></new-blogs>
            <tagcloud></tagcloud>

        </div>

    </div>

</div>
</template>

<script>
import BlogList from './common/bloglist.vue'
import Weather from './common/weather.vue'
import NewBlogs from './common/news.vue'
import Tagcloud from './common/tagcloud.vue'


export default  {

    components: {
        BlogList, NewBlogs,Weather,Tagcloud
    },
}
</script>