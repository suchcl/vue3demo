<template>
  <div class="container">
    <Header />
    asd
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/TheHeader.vue";
export default {
  name: "App",
  components: { Header },
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped>
.left-side,
.main {
  border-radius: 4px;
}
.el-row {
  margin-bottom: 20px;
}
.link {
  margin: 0 10px;
}
.left-side,
.main {
  height: 30px;
  line-height: 30px;
}
.left-side {
  background-color: teal;
  color: #fff;
}
.main {
  background-color: sandybrown;
  color: #fff;
}
.list {
  padding: 0;
}
</style>
