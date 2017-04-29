<template>
<div class="am-u-lg-9 ">

<div class="am-hide-sm my-bread-panel am-panel am-panel-default">
<div class="am-panel-bd">
<ol class="am-breadcrumb">
<li><i class="am-icon-home am-icon-xs">&nbsp  </i>
<router-link to="/">首页
</router-link>
</li>
<li><a>文章</a></li>
<li class="am-active">
{{$route.params.cate?$route.params.cate:'all'}}
</li>
</ol>
<hr>
<ol class="am-breadcrumb am-breadcrumb-slash">

<li v-for="cate in cates" class="active">
    <router-link :to="'/blog/'+cate.alias ">
    <strong v-if="cate.alias==$route.params.cate" >{{cate.name}}</strong>
    <template v-else>{{cate.name}}</template>
    </router-link>
</li>

</ol>
</div>
</div>

<div data-am-widget="list_news" class="am-list-news am-list-news-default" >
<div class="am-list-news-bd">


    <ul class="am-list">
        <li  v-for="blog in blogs" class="am-g am-list-item-thumbed blog-item">

        <div class="am-u-sm-5 am-u-md-4 am-u-lg-4 am-item-thumb">
        <router-link :to=" blog.id | href(blog.title) ">
            <img :src=" blog.thumb_img | src " alt=""/>
        </router-link>
        </div>

        <div class=" am-u-sm-7 am-u-md-8 am-u-lg-8 am-list-main">

            <h2 class="am-list-item-hd blog-item-title">
            <router-link :to=" blog.id | href(blog.title) ">
                <p class="am-text-truncate">{{ blog.title }}</p>
            </router-link>
            </h2>

            <div class="am-list-item-text blog-item-text">{{ blog.abstract }}</div>

            <div class="am-list-item-text am-hide-sm-down blog-item-meta">
            <i class="am-icon-tags am-icon-xs"></i>&nbsp

            <router-link :to="'/blog/search/'+tag " v-for="(tag,index) in blog.tagsarr" :key="index" class="blog-item-tags">
            {{tag}}&nbsp
            </router-link>
            &nbsp&nbsp
            <i class="am-icon-eye am-icon-xs"></i>
            <span class="blog-item-click">{{blog.click}}</span>
            </div>

        </div>

        </li>
    </ul>

    

<a id='more' class="am-text-center blog-more" v-html="more.mes" style="display:block"></a>

</div>
</div>
</div>
</template>

<script>
export default {

    data:function(){
        return {
            blogs:[],
            cates:[],
            more:{page:1,hasmore:0,time:0,mes:''},
        }
    },

    filters:{
        src:function(url){
            return 'http://zmhjy.xyz/'+url;
        },
        href:function(id,title=''){
            return '/blog/'+id+'/'+title;
        },
        taglink:function(tag){
            return 'http://zmhjy.xyz/blog?tag='+tag;
        }
    },

    watch:{
        '$route':function(){
            this.blogs=[],
            this.more={page:1,hasmore:0,time:0,mes:''},
            this.getBlogs();
        }
    },
        
    mounted:function(){
        this.getCates();
        this.getBlogs();    
        this.more.time = new Date();
        addEventListener('scroll',( { m=this.more} )=>{
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

            if (m.hasmore) {   
                if (scrollTop>=document.body.clientHeight-window.screen.height) {   
                    let _time = new Date();
                    if ( (_time-m.time)>2000) {
                        m.time=_time;
                        m.mes='<i class="am-icon-spinner am-icon-pulse"></i> Loading...';
                        setTimeout(this.getBlogs,1000);             
                    }
                }           
            }          
        });

    },

    methods:{
        getBlogs:function(){
            this.$http.jsonp("http://zmhjy.xyz/api/blogs",{
                jsonp:'api',
                params:Object.assign(this.$route.params,{count:5,page:this.more.page})
            }).then( (res,m=this.more) => {
                this.blogs.push(...res.body.data); 
                m.page++;              
                m.hasmore=res.body.last_page-res.body.current_page; 
                m.mes=m.hasmore?'--上拉获取更多--':null;   
            });     

        },
        getCates:function(){
            this.$http.jsonp("http://zmhjy.xyz/api/cates",{
                jsonp:'api',
            }).then( res => this.cates = res.body);     
        },

    }

  
}
</script>