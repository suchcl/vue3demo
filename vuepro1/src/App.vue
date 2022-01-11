<template>
  <ul class="nav">
    <li>
      <router-link to="/hello">Hello</router-link>
    </li>
    <li>
      <router-link to="/ref">Ref函数</router-link>
    </li>
    <li>
      <router-link to="/reactive">Reactive</router-link>
    </li>
    <li>
      <router-link to="/setup">setup</router-link>
    </li>
    <li>
      <router-link to="/computed">计算属性</router-link>
    </li>
    <li>
      <router-link to="/watch">Watch</router-link>
    </li>
    <li>
      <router-link to="/watchEffect">WatchEffect</router-link>
    </li>
    <li>
      <router-link to="/point">点击位置坐标</router-link>
    </li>
    <li>
      <router-link to="/toRef">toRef</router-link>
    </li>
    <li>
      <router-link to="/shallow">shallowReactive&&shallowRef</router-link>
    </li>
    <li>
      <router-link to="/readonly">readonly&shallowReadonly</router-link>
    </li>
    <li>
      <router-link to="/raw">toRaw&markRaw</router-link>
    </li>
    <li>
      <router-link to="/customRef">CustomRef</router-link>
    </li>
    <li>
      <router-link to="/provide">Provide&inject</router-link>
    </li>
    <li>
      <router-link to="/isres">响应式对象判断</router-link>
    </li>
    <li>
      <router-link to="/teleport">Teleport</router-link>
    </li>
    <li>
      <router-link to="/suspense">Suspense</router-link>
    </li>
  </ul>

  <router-view></router-view>
</template>

<script>
</script>
<style>
ul,
li,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
<style scoped>
.nav {
  clear: both;
  padding: 20px;
  background-color: bisque;
  overflow: hidden;
}
.nav li {
  float: left;
  word-break: keep-all;
  line-height: 28px;
  margin: 0 10px;
}
a {
  text-decoration: none;
}
</style>