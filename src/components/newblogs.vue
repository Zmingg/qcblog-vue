<template>
<div class="main">
    <div class="title">
        近期更新
    </div>
	<div v-for="blog in blogs" :key="blog.id" class="item" :title="blog.title">
		{{ blog.title }}
	</div>
</div>
</template>

<script>
export default {

    data:function(){
        return {
            blogs:[]
        }
    },

    filters:{
        href:function(id,title){
            return '/blog/'+id+'/'+title;
        }
    },
        
    created:function(){
        this.getnews();
    },

    methods:{
        getnews:function(){
            this.$http.jsonp("http://zmhjy.xyz/api/news",{
                jsonp:'api',
                params:{ count:6 }
            }).then((res) => this.blogs = res.body);     
        }
    }
}
</script>
<style scoped>
.main {
    padding: 5px 10px;
    background: #fff;
    color: #575757;
    font-size: 15px;
}
.title {
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
    border-bottom: solid 1px #626262;
}
.item {
    height: 30px;
    line-height: 30px;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-top: dotted 1px #cbcbcb;
    cursor: pointer;
}
.item:nth-child(2) {
    border-top: none;
}
.item:hover {
    color: #939393;
}
</style>