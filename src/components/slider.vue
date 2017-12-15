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
                {title:'QC BLOG —— Web Page Technique',src:'http://p04p94ehj.bkt.clouddn.com/slider/slider_1.jpg'},
                {title:'Node.JS —— All things are possible',src:'http://p04p94ehj.bkt.clouddn.com/slider/slider_2.jpg'},
                {title:'Vue.Js 2.0 —— JavaScript Frame',src:'http://p04p94ehj.bkt.clouddn.com/slider/slider_3.jpg'}
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