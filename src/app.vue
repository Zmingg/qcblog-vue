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
export default  {
	components:{
	  	Index, NavMenu
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
    margin-top: 10px;
    padding: 5px;
    text-align: center;
    background: #ffffff;
    font-size: 14px;
}
</style>