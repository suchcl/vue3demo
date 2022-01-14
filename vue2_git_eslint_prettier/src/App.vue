<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="left-side">有内容</div>
      </el-col>
      <el-col :span="18">
        <div class="main">
          <div class="btn-area">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">success</el-button>
            <el-button type="info">Info</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" :justify="center">
      <el-col :span="6">
        <div class="left-side">内容呢</div>
      </el-col>
      <el-col :span="3" :offset="4">
        <div class="main">有内容</div>
        <div class="main hidden-sm-and-up" style="margin-top: 10px">
          我是最新的内容
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5" :offset="2">
        <div class="left-side">有内容</div>
      </el-col>
      <el-col :span="6" :push="2">
        <div class="main">main区域</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="link-area">
          <h3>链接区域</h3>
          <el-link class="link" type="primary" href="https://www.baidu.com"
            >百度</el-link
          >
          <el-link class="link" href="https://wwww.58.com">58</el-link>
          <el-link class="link" type="success" href="https://www.mop.com"
            >猫扑</el-link
          >
          <el-link class="link" type="danger" href="https://www.google.com"
            >谷歌</el-link
          >
          <el-link class="link" type="info" href="https://www.renren.com"
            >人人网</el-link
          >
          <el-link class="link" type="warning" href="https://www.julive.com"
            >居理</el-link
          >
          <el-link type="success" href="https://www.tianyan.cn" disabled
            >天涯，不可点击了</el-link
          >
          <el-link class="link" :underline="false">无下花心</el-link>
          <el-link class="link">有下划线</el-link>
          <hr />
          <el-link type="success" :icon="Edit"> 这个链接带图标了 </el-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <!-- <el-scrollbar height="400px">
          <ul class="list">
            <li v-for="item in 30" :key="item">{{ item }}</li>
          </ul>
        </el-scrollbar> -->
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <button type="primary" @click="getCities">请求接口</button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  setup() {
    function getCities() {
      axios.get("http://127.0.0.1:7001/getProvince").then((res) => {
        console.log(res);
      });
      console.log("按钮被点击了");
    }

    return {
      getCities,
    };
  },
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
