<template>
<div class="am-panel am-panel-default list-side">
	<div class="am-panel-hd">
		<h3 class="am-panel-title">
			<i class="am-icon-paw am-icon-xs"></i>
			&nbsp 最新推荐
		</h3>
	</div>  
	<ul class="am-list am-list-border">
		<li v-for="blog in blogs">
		<a :href="blog.id | href(blog.title)" class="am-text-truncate">
			{{blog.title}}
		</a>
		</li>
	</ul>
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
            return 'http://laravel.cc/blog/'+id+'/'+title;
        }
    },
        
    created:function(){
        this.getnews();
    },

    methods:{
        getnews:function(){
            this.$http.jsonp("http://laravel.cc/api/news",{
                jsonp:'api',
                params:{ count:6 }
            }).then(function(res){
                this.blogs = res.body;
            });     
        }
    }

  
}
</script>
