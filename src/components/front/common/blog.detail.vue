<template>
<div class="am-u-lg-9 ">

        <div class="am-hide-sm my-bread-panel am-panel am-panel-default">
          <div class="am-panel-bd">
            <ol class="am-breadcrumb">
              <li><i class="am-icon-home am-icon-xs">&nbsp  </i><a href="">首页</a></li>
              <li><a href="">文章</a></li>
              <li><a href="">{{blog.cate.name}}</a></li>
              <li class="am-active">{{blog.title}}</li>
            </ol>
          </div>
        </div>  


        <article class="am-article" >
          <div class="am-article-hd blog-detail-hd">
            <h1 class="am-article-title">{{blog.title}}</h1>
            <p>
              <i class="am-icon-tags am-icon-xs"></i>&nbsp&nbsp

              <a v-for="atag in blog.tagsarr" href='' >{{atag}}&nbsp</a>&nbsp

              &nbsp&nbsp&nbsp
              <i class="am-icon-user am-icon-xs"></i>&nbsp&nbsp{{blog.user.nickname}}
            </p>
            <br>
          </div>

          <div class="am-article-bd" v-html="blog.content"></div>

        </article>


  		
</div>
</template>

<script>
export default {

	data:function(){
		return {
			blog:{
				user:{},
				cate:{}
			},
		}
	},

	watch:{
		'$route':function(){
			this.getBlog();
		}
	},

	mounted:function(){
		this.getBlog();
	},

	methods:{
		getBlog:function(){
			this.$http.jsonp("http://zmhjy.xyz/api/blogshow",{
				jsonp:'api',
				params:this.$route.params
			}).then(function(res){
				this.blog = res.body;
			});     
		}
	}




}
</script>