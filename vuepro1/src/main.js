// 导入的不再是vue的构造函数了,而是一个名为createApp的工厂函数
// 工厂函数的特点,是不用通过new函数来调用,直接调用就可以了
import { createApp } from 'vue'
import App from './App.vue';
import router from "./router/index";

// 这行代码拆解一下,看下面的,本行先注释掉
// createApp(App).mount('#app')

// vue3的实现
// vue3实现中的app,类似于vue2实现中的vm,但是app比vm更“轻”,vue3中的app,没有那么多的属性去挂载
const app = createApp(App);

app.use(router);
// mount:挂载
// unmount:卸载
// 组件可以被用用挂载,也可以被应用卸载
app.mount("#app");

// 上面挂载组件，也可以合并为一步
// createApp(App).use(router).mount("#app");

// 卸载组件
// 测试页面渲染好之后1s被卸载
// 首页的组件卸载没有实际的意义,只需要了解应用可以去挂载组件,也可以卸载组件就可以了
// setTimeout(() => {
//     app.unmount("#app");
// },1000);


// 看vue2的实现
// const vm = new Vue({
//     render:h => h(App)
// });
// vm.$mount("#app");