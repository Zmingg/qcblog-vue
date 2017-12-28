<template>
<div class="box">
    <div class="main">
        <slider></slider>
        <hotblogs class="hot"></hotblogs>
    </div>
    <div class="aside">
        <clock></clock>
        <blog-list-side title="近期更新" :data="latest" style="margin-top: 5px"></blog-list-side>
        <my style="margin-top: 10px"></my>
    </div>
</div>
</template>
<script>
import Slider from '../components/slider.vue';
import Hotblogs from '../components/blog-grid.vue';
import BlogListSide from '../components/blog-list-side.vue';
import Clock from '../components/clock.vue';
import My from '../components/my.vue';
import { blogLatest } from '../api/blog';
export default  {
    components: {
        Slider, Hotblogs, BlogListSide, Clock, My
    },
    data(){
        return {
            latest: []
        }
    },
    created(){
        this.getnews();
    },
    methods:{
        getnews: async function(){
            let res = await blogLatest(6);
            if (res.ok) {
                this.latest = res.data;
            }
        }
    }
}
</script>
<style scoped>
:local(.box:after) {
    clear: both;
    content: " ";
    display: block;
}
:local(.box) {
    position: relative;
    padding-right: 260px;
}
.main {
    width: 100%;
    float: left;
    margin-top: 5px;
}
.aside {
    float: right;
    margin-right: -260px;
    width: 250px;
    height: 100%;
    display: block;
}
.hot {
    margin-top: 10px;
    padding: 10px;
    background: #ffffff;
}
@media screen and (max-width: 900px) {
    .aside {
        display: none;
    }
    .box {
        padding-right: 0;
    }
}
</style>