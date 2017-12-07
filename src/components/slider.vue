<template>
    <el-carousel trigger="click" :height="height">
        <el-carousel-item v-for="img,index in imgs" :key="index">
            <img :src="img.src" />
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
            return this.width/12*5 + 'px';
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item img {
    width: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>