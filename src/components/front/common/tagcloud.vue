<template>
<div class="am-panel am-panel-default list-side">
	<div class="am-panel-hd">
	<h3 class="am-panel-title"><i class="am-icon-paw am-icon-xs"></i>&nbsp 标签云</h3>
	</div>
	<div class="am-list am-list-border tags-border">


	<a :href="tag.tagname | href" v-for="tag in tags">
	<span :class="tag.style" class="am-badge am-radius am-text-sm">{{tag.tagname}}</span>
	</a>


	</div> 
</div>
</template>

<script>
module.exports = {

    data:function(){
        return {      
            tags:[]
        }
    },

    filters:{
        href:function(tagname){
            return 'http://laravel.cc/blog?tag='+tagname;
        }
    },

    created:function(){
        this.gettags();
    },

    methods:{
    	gettags:function(){
    		this.$http.jsonp("http://laravel.cc/api/tags",{
	                jsonp:'api',
	                params:{count:12}
		}).then(function(res){
			this.tags = res.body;
			var fontStyle=["danger","info","warning","primary","success"];
			this.tags.filter(function(tag){
				tag.style = "am-badge-"+fontStyle[Math.floor(Math.random()*5)];
			})
		});     
    	}	
    }

}
</script>