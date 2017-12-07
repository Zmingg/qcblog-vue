<template>
    <div class="hot-blog">
        <ul class="hot-list">
            <li class="item" v-for="blog in blogs">
                <span class="warp"></span>
                <img :src="blog.thumb_img | src" />
                <span class="text">
                    {{ blog.title }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    data:function(){
        return {
            blogs:[],
        }
    },

    filters:{
        src:function(url){
            return 'http://zmhjy.xyz/'+url;
        },
        href:function(id,title){
            return '/blog/'+id+'/'+title;
        }
    },
        
    created:function(){
        this.getblogs();
    },

    methods:{
        getblogs:function(){
            this.$http.jsonp("http://zmhjy.xyz/api/hots",{
                jsonp:'api',
                params:{count:8}
            }).then(function(res){
                this.blogs = res.body;
            });     
        }
    }
}
</script>
<style scoped="scss">
.hot-blog {
    width: 100%;
    overflow: hidden;
}
.warp {
    position: absolute;
    top: 0;
    bottom: 25px;
    left: 0;
    right: 0;
    background: #ffffff;
    opacity: 0;
    transition: 0.5s;
}
.warp:hover {
    opacity: 0.5;
}
.hot-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
}
.item {
    position: relative;
    width: calc((100% - 15px)/4);
    margin-bottom: 10px;
    font-size: 0;
    cursor: pointer;
}

.item:nth-child(4n+1),
.item:nth-child(4n+3){
    margin-right: 5px;
}

.text {
    display: inline-block;
    width: 100%;
    height: 25px;
    line-height: 25px;
    background: #ffffff;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    font-size: 15px;
    color: #575757;
    padding: 0 5px;
}
@media screen and (max-width: 700px) {
    .item {
        width: calc((100% - 5px)/2);
    }
}
@media screen and (min-width: 701px) {
    .item:nth-child(4n+2){
        margin-right: 5px;
    }
}
</style>