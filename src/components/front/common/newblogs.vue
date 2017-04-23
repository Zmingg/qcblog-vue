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
		<router-link :to="blog.id | href(blog.title)" class="am-text-truncate">
			{{blog.title}}
		</router-link>
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
