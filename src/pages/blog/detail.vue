<template>
    <div class="main">
        <h3 class="title">{{ blog.title }}</h3>
        <div class="info">
            <i class="fa fa-tags fa-fw" aria-hidden="true"></i> {{ blog.tags }}
            &nbsp&nbsp
            <i class="fa fa-user fa-fw" aria-hidden="true"></i> {{ blog.nickname }}
        </div>
        <div class="content" v-html="blog.content"></div>
    </div>
</template>
<script>

import { blogOne } from '../../api/blog';
export default {
    data(){
        return {
            blog: {}
        }
    },
    async beforeRouteEnter (to, from, next) {
        let res = await blogOne(to.params.id);
        if (res.ok) {
            next(vm => {
                vm.blog = res.data;
            })
        }
    },
    async beforeRouteUpdate (to, from, next) {
        let res = await blogOne(to.params.id);
        if (res.ok) {
            this.blog = res.data;
            next();
        }
    }
}
</script>
<style scoped>
.main {
    margin-top: 5px;
    padding: 15px;
    background: #ffffff;
}
.title {
    height: 35px;
    line-height: 35px;
}
.info {
    height: 35px;
    line-height: 35px;
    margin-bottom: 10px;
    border-bottom: solid 1px #333333;
}
.content {
    line-height: 25px;
    font-size: 14px;
}
</style>
<style>
pre {
    padding: 5px;
    border-radius: 5px;
    color: #f3f3f3;
    font-family: sans-serif;
    background: #3e3e3e;
}
</style>