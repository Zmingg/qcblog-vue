<template>
<div id="blogs">
    <ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-4 hot-list">
        <li  v-for="blog in blogs">
            <a :href="blog.id | href(blog.title)">
                <img class="" :src="blog.thumb_img | src" />        
            </a>
            <p class="am-text-truncate">
               {{ blog.title }}
            </p>
        </li>
    </ul>
</div>
</template>

<script>
module.exports = {

    data:function(){
        return {
            blogs:[],
        }
    },



    filters:{
        src:function(url){
            return 'http://laravel.cc/'+url;
        },
        href:function(id,title){
            return 'http://laravel.cc/blog/'+id+'/'+title;
        }
    },
        
    created:function(){
        this.getblogs();
    },

    methods:{
        getblogs:function(){
            this.$http.jsonp("http://laravel.cc/api/hots",{
                jsonp:'api',
                params:{count:8}
            }).then(function(res){
                this.blogs = res.body;
            });     
        }
    }

  
}
</script>