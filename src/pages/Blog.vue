<template>
    <div class="box">
        <div class="main">
            <blog-list></blog-list>
        </div>
        <div class="aside">
            <newblogs style="margin-top: 5px"></newblogs>
            <my style="margin-top: 10px"></my>
        </div>
    </div>
</template>
<script>
    import BlogList from '../components/blog-list.vue';
    import Newblogs from '../components/newblogs.vue';
    import Clock from '../components/clock.vue';
    import My from '../components/my.vue';
    export default  {
        components: {
            BlogList, Newblogs, Clock, My
        },
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