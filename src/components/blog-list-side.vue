<template>
<div class="main">
    <div class="title">
        {{ title }}
    </div>
    <ul @click="goDetail">
        <li v-for="blog in data" :key="blog.id" class="item" :title="blog.title" :data-id="blog.id">
            {{ blog.title }}
        </li>
    </ul>
</div>
</template>

<script>
import { blogLatest } from '../api/blog';
export default {
    props: [
        'title', 'data', 'count'
    ],
    methods: {
        goDetail: function (e) {
            if (e.target.tagName === 'LI') {
                this.$router.push('/blog/' + e.target.dataset.id);
            }
        }
    }
}
</script>
<style scoped>
.main {
    padding: 5px 10px;
    background: #fff;
    color: #575757;
    font-size: 15px;
}
.title {
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
    border-bottom: solid 1px #626262;
}
.item {
    height: 35px;
    line-height: 35px;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-top: dotted 1px #cbcbcb;
    cursor: pointer;
}
.item:nth-child(1) {
    border-top: none;
}
.item:hover {
    color: #939393;
}
</style>