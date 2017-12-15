<template>
    <div class="main">
        <div class="title">
            联系我
        </div>
        <div class="item">
            腾讯: 157679749
        </div>
        <div class="item">
            邮箱: zmingg@outlook.com
        </div>

    </div>
</template>
<style scoped>
.main {
    padding: 5px 10px;
    background: #fff;
    color: #575757;
    font-size: 15px;
}
.main::after {
    display: block;
    content: '';
    clear: both;
    visibility: hidden;
}
.title {
    margin-bottom: 5px;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
    border-bottom: solid 1px #626262;
}
.item {
    height: 30px;
    line-height: 30px;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    /*border-top: dotted 1px #cbcbcb;*/
    cursor: pointer;
}
</style>