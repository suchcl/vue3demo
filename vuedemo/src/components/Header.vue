<template>
    <ul class="nav">
        <li>
            <router-link to="/">首页</router-link>
        </li>
        <li>
            <router-link to="/user">用户列表</router-link>
        </li>
    </ul>
</template>

<style lang="less">
.nav {
    display: flex;
    li {
        margin: 0 10px;
    }
}
</style>