<template>
    <div class="main">
        <div class="title">联系我</div>
        <div class="item"><i class="fa fa-qq fa-fw" aria-hidden="true"></i> 157679749</div>
        <div class="item"><i class="fa fa-envelope fa-fw" aria-hidden="true"></i> zmingg@outlook.com</div>
        <div class="item"><i class="fa fa-github fa-fw" aria-hidden="true"></i>
            <a href="https://github.com/Zmingg" target="_blank">github.com/Zmingg</a>
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
    font-size: 15px;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
a {
    text-decoration: none
}
</style>