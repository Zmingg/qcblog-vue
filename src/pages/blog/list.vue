<template>
    <div>
        <ul class="list">
            <li class="item" v-for="blog in blogs" @click="view(blog.id)">
                <div class="item-img">
                    <span class="warp"></span>
                    <img :src="blog.thumb_img|uri" />
                </div>
                <div class="item-data" @click="view">
                    <div class="data-title">{{blog.title}}</div>
                    <div class="data-abs">{{blog.abstract}}</div>
                    <div class="data-mes">
                        <span class="el-icon-star-on"> {{blog.tags}}</span>
                        &nbsp&nbsp&nbsp&nbsp
                        <span class="el-icon-view"> {{blog.click}}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="more">
            <span class="el-icon-more" v-if="hasmore && !isloading"></span>
            <span class="el-icon-loading" v-if="hasmore && isloading"></span>
        </div>

    </div>
</template>
<script>
import { blogPage } from '../../api/blog';
export default {
    data(){
        return {
            blogs: [],
            hasmore: false,
            curpage: 1,
            pages: 1,
            refresh_last: 0,
            isloading: false
        }
    },
    filters: {
        uri: function (url) {
            return 'http://p04p94ehj.bkt.clouddn.com/' + url;
        }
    },
    mounted(){
        this.getBlog();
        this.initScroll();
    },
    destroyed(){
        window.removeEventListener('scroll',this.refresh);
    },
    methods: {
        getBlog: async function () {
            let res = await blogPage(this.curpage);
            if (res.ok) {
                this.blogs = this.blogs.concat(res.data.data);
                this.hasmore = res.data.hasmore;
                this.pages = res.data.pages;
                this.isloading = false;
            }
        },
        getMore: function () {
            if (this.hasmore) {
                this.curpage++;
                this.getBlog();
            }
        },
        initScroll: function () {
            this.refresh_time = new Date().getTime();
            window.addEventListener('scroll',this.refresh);
        },
        refresh: function () {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (this.hasmore) {
                if (scrollTop >= document.body.clientHeight - window.screen.height) {
                    let _time = new Date();
                    if ( (_time-this.refresh_last)>2000) {
                        this.refresh_last = _time;
                        this.isloading = true;
                        setTimeout(this.getMore,1000);
                    }
                }
            }
        },
        view: function (id) {
            if(typeof id === 'number') {
                this.$router.push('/blog/' + id);
            }


        }
    }


}
</script>
<style scoped>
.list {
    color: #555555;
}
.item {
    position: relative;
    margin-bottom: 1px;
    padding: 10px;
    height: 120px;
    overflow: hidden;
    background: #ffffff;
    cursor: pointer;
}
.item::after {
    display: block;
    content: '';
    clear: both;
    visibility: hidden;
}
.item-img {
    position: relative;
    float: left;
    width: 200px;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}
.warp {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    opacity: 0;
    transition: 0.5s;
}
.warp:hover {
    opacity: 0.5;
}
.item-data {
    float: left;
    width: 100%;
    height: 100%;
    margin-left: -200px;
    padding-left: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;

}
.data-abs:hover {
    opacity: 0.7;
}
.data-title {
    height: 25px;
    line-height: 25px;
    font-size: 15px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
}
.data-abs {
    height: 40px;
    line-height: 20px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: wrap;
    transition: 0.5s;
}
.data-mes {
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
}
.more {
    text-align: center;
    display: block;
    font-size: 20px;
}
</style>