<template>
    <div class="menu">
        <span class="logo">清 尘 居</span>
        <nav @click="select">
            <li v-for="nav in navs"
                :data-path="nav.path"
                :class="{active: nav.path===mainPath}">
                {{nav.name}}
            </li>
        </nav>
    </div>

</template>
<script>
export default {
    data(){
        return {
            navs: [
                { path: '/', name: '首 页' },
                { path: '/blog', name: '文 章' }
            ]
        }
    },
    computed: {
        mainPath: function () {
            return this.$route.matched[0].path === ''
                ? '/'
                : this.$route.matched[0].path;
        }
    },
    methods: {
        select(e) {
            if (e.target.tagName !== 'LI') {
                return;
            }
            this.$router.push({
                path: e.target.dataset.path
            })
        }
    }
}
</script>
<style scoped>
.menu {
    width: 100%;
    height: 50px;
    line-height: 40px;
    margin-bottom: 15px;
}
.logo {
    width: 150px;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
nav {
    float: right;
}
nav > li {
    float: left;
    margin: 10px 10px 0 0;
    width: 50px;
    height: 40px;
    text-align: center;
    color: #575757;
    cursor: pointer;
}
nav > li:hover {
    color: #919191;
}
.active {
    border-bottom: 2px solid #575757;
}
</style>