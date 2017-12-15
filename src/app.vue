<template>
<div class="container">
	<nav-menu></nav-menu>

    <router-view></router-view>

    <footer>
        <p>Copyright © 2014-2017, QC.TEC, All Rights Reserved</p>
    </footer>

</div>
</template>
<script>
import Index from './pages/Index.vue';
import NavMenu from './components/nav-menu.vue';
import { mapActions } from 'vuex'
import { xfetch } from './api/api'
export default  {
	components:{
	  	Index, NavMenu
	},
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

    },
    methods:{
        ...mapActions([
            'checkSignin','logout'
        ]),
      	toggleCanvas:function(){
      		this.isActive=!this.isActive;
      	},
      	getCates:function(){
           xfetch("http://laravel.cc/api/cates")
	           .then(res=>res.json())
	           .then(json=>{
	              this.cates = json;
	           })
       },

    }
}

</script>
<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
}
footer {
    width: 100%;
    margin-top: 20px;
    text-align: center;
}
</style>