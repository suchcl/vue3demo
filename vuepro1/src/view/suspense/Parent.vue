<template>
  <div class="parent">
    <h3>父组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        正在努力加载，请稍等~~~~
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import Child from "./Child.vue";
import { defineAsyncComponent } from "@vue/runtime-core";
let Child = defineAsyncComponent(() => import("./Child.vue"));
export default {
  components: {
    Child,
  },
  setup() {},
};
</script>

<style scoped>
.parent {
  padding: 20px;
  background-color: cadetblue;
}
</style>
