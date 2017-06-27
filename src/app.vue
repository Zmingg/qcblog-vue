<template>
<div>
<header class="am-topbar am-topbar-fixed-top">
<div class="am-container">

<h1 class="am-topbar-brand">
	<router-link to="/">清 尘 居</router-link>
</h1>
<button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm  am-show-sm-only " @click="toggleCanvas()">
<span class="am-icon-bars"></span>
</button>

<div class="am-topbar-right am-nav am-nav-pills am-topbar-nav am-hide-sm-only">
	<ul class="am-nav am-nav-pills am-topbar-nav">
		<li name="index"><router-link to="/">首页</router-link></li>
		<li name="blog"><router-link to="/blog">文章</router-link></li>
		<li name="auth" v-if="!isLogin"><router-link to="/passport">登陆</router-link></li>
        <li v-show="isLogin" class="am-dropdown" data-am-dropdown>
        <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
          个人信息 <span class="am-icon-caret-down"></span>
        </a>
        <ul class="am-dropdown-content">
          <li><a>{{user.nickname?user.nickname:user.name}}</a></li>
          <li>
            <a @click="logout">
            退出登陆
            </a>
        </li>
        </ul>
      </li>
	</ul>
</div>

</div>
</header>


<div class="offcanvas-bar" :class="{ active: isActive }">
<div class="offcanvas-content">
	<ul>
		<li class="head"><router-link to="/">清 尘 居</router-link></li>
		<li>
		<router-link to="/blog">All Blogs</router-link>
		</li>
		<li v-for="acate of cates" :class="$route.params.cate==acate.alias?'active':''">
		  <router-link :to="'/blog/'+acate.alias">{{acate.name}}</router-link>
		</li>
	</ul>
</div>
</div>
<div id="offcanvas" class="offcanvas-bg" :class="{ active: isActive }"></div>




<div id="container" class="am-container" :class="{ active: isActive }">

<!-- Router -->
<router-view></router-view>
<br>

<div class="copyright">
<p>Copyright © 1999-2016, QC.TEC, All Rights Reserved</p>
</div>

<br>

</div>

</div>
</template>
<script>
import { mapActions } from 'vuex'
export default  {

    data:function(){
        return {
            isActive:false,
            cates:[],
            isLogin: false,
            user: {},
        }
    },
    watch:{
        'isActive':function(){
            if (this.isActive==true) {
                document.getElementById('offcanvas').addEventListener('click',()=>{
                	this.isActive=false;
                },true);
            }
        },
        '$route':function(){
            this.isActive=false;
        },
        '$store.state.isLogin':function(){
            this.isLogin = this.$store.state.isLogin;
            this.user = this.$store.state.user;
        }

    },
    mounted:function(){
    	this.getCates();
        this.checkSignin();
    },
    methods:{
        ...mapActions([
            'checkSignin','logout'
        ]),
    	toggleCanvas:function(){
    		this.isActive=!this.isActive;
    	},
    	getCates:function(){
            this.$http.jsonp("http://laravel.cc/api/cates",{
                jsonp:'api',
            }).then( res => this.cates = res.body);     
        },

    }
}

</script>
<style lang="sass" scoped>
@mixin transition($transition){
    transition: $transition;
    -moz-transition: -moz-transform $transition;
    -webkit-transition: -webkit-transform $transition;
    -o-transition: -o-transform $transition;
}
@mixin transform($transform){
    transform: $transform;
    -moz-transform: $transform;
    -webkit-transform: $transform;
    -o-transform: $transform;
}

#container {
	margin-top:10px;
    @include transition(0.3s ease-in-out);

	&.active {
		@include transform(translate(50%));
		position:fixed;
	}
}

.offcanvas-bg {
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width:100%;
    z-index:999;
    background: rgba(0, 0, 0, 0.15);
    @include transition(0.3s ease-in-out);
    @include transform(translate(-100%));

    &.active {
        @include transform(translate(0%));
    }
}

.offcanvas-bar{
    @extend .offcanvas-bg;

    	z-index:1000;
        background: #333;
        width:50%;
        padding:35px 15px;

        ul {
		margin-bottom: 0;
		padding: 0;
		list-style: none;
		color:#ccc;

    		li {
    		    text-shadow: 0 1px 0 rgba(0,0,0,.5);
    			font-size:1.6rem;
    			line-height:1.6rem;
    			font-weight:normal;
    			box-shadow: inset 0 1px 0 rgba(255,255,255,.05);
    			border-top: 1px solid rgba(0,0,0,.3);

    			&.active {
    				background: #404040;
    			}
    			
    			&.head {
    				color: #777;
    				background: #404040;
    			}

    			a {
    				font-size:1.6rem;
    				padding: 0.6em 1em;
    				position: relative;
    				display: block;
    				color:#ccc;
    			}
    		}
        }

}

</style>