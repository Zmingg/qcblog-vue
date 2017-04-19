<template>
<div class="am-u-lg-9 ">

<div class="am-hide-sm my-bread-panel am-panel am-panel-default">
<div class="am-panel-bd">
<ol class="am-breadcrumb">
<li><i class="am-icon-home am-icon-xs">&nbsp  </i><a href="/">首页</a></li>
<li><a href="">文章</a></li>
<li class="am-active">

</li>
</ol>
<hr>
<ol class="am-breadcrumb am-breadcrumb-slash">

<li v-for="cate in cates" class="active">
<a href="">{{cate.name}}</a>
</li>

</ol>
</div>
</div>

<div data-am-widget="list_news" class="am-list-news am-list-news-default" >
<div class="am-list-news-bd">


    <ul class="am-list">
        <li  v-for="blog in blogs" class="am-g am-list-item-thumbed blog-item">

        <div class="am-u-sm-5 am-u-md-4 am-u-lg-4 am-item-thumb">
            <a :href=" blog.id | href(blog.title) " class="">
            <img :src=" blog.thumb_img | src " alt=""/>
            </a>
        </div>

        <div class=" am-u-sm-7 am-u-md-8 am-u-lg-8 am-list-main">

            <h2 class="am-list-item-hd blog-item-title">
            <a :href=" blog.id | href(blog.title) "><p class="am-text-truncate">{{ blog.title }}</p></a>
            </h2>

            <div class="am-list-item-text blog-item-text">{{ blog.abstract }}</div>

            <div class="am-list-item-text am-hide-sm-down blog-item-meta">
            <i class="am-icon-tags am-icon-xs"></i>&nbsp


            <a v-for="tag in blog.tagsarr" :href='tag|taglink' class="blog-item-tags">{{tag}}&nbsp</a>

            &nbsp&nbsp
            <i class="am-icon-eye am-icon-xs"></i>
            <span class="blog-item-click">{{blog.click}}</span>
            </div>

        </div>

        </li>
    </ul>


</div>
</div>
</div>
</template>

<script>
export default {

    data:function(){
        return {
            blogs:[],
            cates:[]
        }
    },



    filters:{
        src:function(url){
            return 'http://laravel.cc/'+url;
        },
        href:function(id,title){
            return 'http://laravel.cc/blog/'+id+'/'+title;
        },
        taglink:function(tag){
            return 'http://laravel.cc/blog?tag='+tag;
        }
    },
        
    created:function(){
        this.getBlogs();
        this.getCates();
    },

    methods:{
        getBlogs:function(){
            this.$http.jsonp("http://laravel.cc/api/blogs",{
                jsonp:'api',
                params:{count:8}
            }).then(function(res){
                this.blogs = res.body;
            });     
        },
        getCates:function(){
            this.$http.jsonp("http://laravel.cc/api/cates",{
                jsonp:'api',
            }).then(function(res){
                this.cates = res.body;
            });     
        }
    }

  
}
</script>