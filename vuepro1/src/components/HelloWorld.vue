<template>
  <!--vue3中,可以没有根标签了,但是也可以写,加根标签没有任何问题-->
  <!--根标签是否添加,可以根据实际的场景需要,有时为了性能,可以减少标签嵌套层级,就不加了,但是也有一些特别场景必须需要有这么一个层级,加上也不纠结-->
  <h3>姓名:{{ user.name }}</h3>
  <p>年龄:{{ user.age }}</p>
  <p>身高:{{ user.height }}</p>
  <button class="btn" @click="sayHello">获取信息</button>
  <button class="btn" @click="getMsg">Vue2配置方式选项式API配置方式读取Vue3配置方式中的组合式API中setup部分的数据</button>
  <button class="btn" @click="getOptions">Vue3组合式api中setup部分访问vue2选项式配置方式的内容</button>
  <button class="btn" @click="getSameProps">获取组合式api和选项式api都配置的同一个属性</button>
  <router-link to="/ref">Ref函数</router-link>
  <router-view></router-view>
</template>

<script>
// import { h } from "vue";

export default {
  name: 'App',
  data() {
    return {
      msg: "Hello,Vue3!",
      info: "Vue2"
    }
  },
  methods: {
    getMsg() {
      // 读取Vue3 组合式api配置中setup中的数据、方法
      // 都正常执行了，说明选项式api方式可以读取到组合式api中setup部分定义的数据、方法
      console.log(`我是Vue3组合式api配置中setup部分的数据：我叫${this.user.name},几年${this.user.age}岁了，身高${this.user.height}米。`);
      this.sayHello();
    },
    getSameProps() {
      console.log(this.info);
    }
  },
  // 先测试一下setup,不考虑响应式
  setup() {
    // 定义数据
    let user = {
      name: "Nicholas Zakas",
      age: 18,
      height: 1.88
    };
    let info = "Vue3";
    let username = "yan";
    // 定义方法
    function sayHello() {
      // 注意这里的变量不需要this，如this.user.name，因为是作用域的原因：setup就是一个函数，具有函数的作用域
      console.log(`我是${user.name},今年${user.age}岁了,身高是:${user.height}`);
    }

    // Vue3组合式api访问vue2配置方式选项式api配置的内容、方法
    function getOptions() {
      console.log(`我是选项式api中配置的内容：${this.msg},这里是vue3组合式api中的内容: ${user.name}`); // 我是选项式api中配置的内容：undefined,这里是vue3组合式api中的内容: Nicholas Zakas
    }

    // 让setup有返回值, 返回值可以在组件中直接使用
    return {
      user,
      info,
      username,
      sayHello, // setup返回的方法,类似vue2中methods配置的方法
      getOptions
    }

    // setup函数还可以返回一个渲染函数，可以参考vue2中入口文件的实例化Vue对象的时候的实现
    // 表示把后面的数据渲染到前面的h3标签
    // return () => h("h3", "我是渲染函数带来的数据");
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  margin-bottom: 20px;
}
</style>
