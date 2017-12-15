<template>
<div class="main">
    <div class="title">
        {{ title }}
    </div>
	<div v-for="blog in data" :key="blog.id" class="item" :title="blog.title">
		{{ blog.title }}
	</div>
</div>
</template>

<script>
import { blogLatest } from '../api/blog';
export default {
    props: [
        'title', 'data', 'count'
    ]
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
.item:nth-child(2) {
    border-top: none;
}
.item:hover {
    color: #939393;
}
</style>