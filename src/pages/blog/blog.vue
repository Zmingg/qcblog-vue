<template>
    <div class="box">
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="aside">
            <blog-list-side title="热门文章" :data="hot"></blog-list-side>
            <blog-list-side title="近期更新" :data="latest" style="margin-top: 10px"></blog-list-side>
            <my style="margin-top: 10px"></my>
        </div>
    </div>
</template>
<script>
import BlogListSide from '../../components/blog-list-side.vue';
import Clock from '../../components/clock.vue';
import My from '../../components/my.vue';
import { blogHot, blogLatest } from '../../api/blog';
export default  {
    components: {
        BlogListSide, Clock, My
    },
    data(){
        return {
            latest: [],
            hot: []
        }
    },
    created(){
        this.getLatest();
        this.getHot();
    },
    methods:{
        getLatest: async function(){
            let res = await blogLatest(6);
            if (res.ok) {
                this.latest = res.data;
            }
        },
        getHot: async function(){
            let res = await blogHot(6);
            if (res.ok) {
                this.hot = res.data;
            }
        }
    }
}
</script>
<style scoped>
    .box:after {
        clear: both;
        content: " ";
        display: block;
    }
    .box {
        position: relative;
        padding-right: 260px;
    }
    .main {
        width: 100%;
        float: left;
    }
    .aside {
        float: right;
        position: absolute;
        width: 250px;
        right: 0;
        height: 100%;
        display: block;
    }
    .hot {
        margin-top: 5px;
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