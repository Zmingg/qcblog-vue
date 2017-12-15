<template>
    <el-carousel   indicator-position="none" trigger="click" :height="height">
        <el-carousel-item v-for="img,index in imgs" :key="index">

            <div class="title">{{ img.title }}</div>
            <img :src="img.src"/>
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    data(){
        return {
            imgs: [
                {title:'QC BLOG —— For Web Technology Share',src:'assets/img/bing-1.jpg'},
                {title:'Laravel —— 为WEB艺术家创造的PHP框架',src:'assets/img/bing-2.jpg'},
                {title:'Vue.Js 2.0 渐进式JavaScript 框架',src:'assets/img/bing-3.jpg'}
            ],
            width: 1000
        }

    },
    computed: {
        height: function () {
            return this.width/12*5.2 + 'px';
        }
    },
    mounted(){
        this.setHeight();
        window.addEventListener('resize', this.setHeight);
    },
    destroyed(){
        window.removeEventListener('resize', this.setHeight);
    },
    methods: {
        setHeight: function () {
            this.width = this.$el.clientWidth;
        }
    }
}
</script>
<style scoped>
.el-carousel__item img {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    font-size: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.title {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-weight: lighter;
    color: #ffffff;
    background: rgba(0,0,0,0.5);
    z-index: 999;
}
</style>